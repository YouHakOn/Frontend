import { useController, UseControllerProps, FieldValues } from "react-hook-form"
import { Input } from '@shared/ui/input'
import { Form } from "radix-ui";


function FormField<TFieldValues extends FieldValues>(
    props: UseControllerProps<TFieldValues> & { label?: string } & { type?: string } & { placeholder: string }
) {
    const { field, fieldState, formState } = useController(props);

    return (
        <Form.Field className='mt-[24px]' name={props.name}>
            {props.label && <Form.Label className='text-[#767676]'>{props.label}</ Form.Label>}
            <Form.Control asChild>
                <Input
                    className='w-[720px] mt-[12px]'
                    {...field}
                    id={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                />
            </Form.Control>
        </Form.Field>
    )
}

export { FormField }