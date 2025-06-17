'use client'

import * as React from 'react'
import { Form as FormPrimitive, Label as LabelPrimitive } from 'radix-ui'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues
} from 'react-hook-form'

import { cn } from '@shared/lib/utils'

const Form = FormPrimitive.Root

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  return {
    name: fieldContext.name,
    ...fieldState
  }
}

function FormItem({
  className,
  ...props
}: Omit<React.ComponentProps<typeof FormPrimitive.Field>, 'name'>) {
  const { name } = useFormField()
  return (
    <FormPrimitive.Field
      name={name}
      data-slot="form-item"
      className={cn('grid gap-2', className)}
      {...props}
    />
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof FormPrimitive.Label>) {
  const { error } = useFormField()

  return (
    <FormPrimitive.Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-error', className)}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof FormPrimitive.Control>) {
  const { error } = useFormField()

  return (
    <FormPrimitive.Control asChild data-slot="form-control" aria-invalid={!!error} {...props} />
  )
}

// function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
//   const { formDescriptionId } = useFormField()

//   return (
//     <p
//       data-slot="form-description"
//       id={formDescriptionId}
//       className={cn("text-text-info text-sm", className)}
//       {...props}
//     />
//   )
// }

function FormMessage({ className, ...props }: React.ComponentProps<typeof FormPrimitive.Message>) {
  const { error } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <FormPrimitive.Message
      data-slot="form-message"
      className={cn('text-error text-sm', className)}
      {...props}
    >
      {body}
    </FormPrimitive.Message>
  )
}

function FormSubmit({ className, ...props }: FormPrimitive.FormSubmitProps) {
  return <FormPrimitive.FormSubmit data-slot="form-submit" {...props} />
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  // FormDescription,
  FormMessage,
  FormField,
  FormSubmit
}
