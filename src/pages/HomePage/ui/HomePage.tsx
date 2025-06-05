import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@shared/ui/select'

const HomePage = () => {
  return (
    <div>
      {/* test */}
      <Button variant="filled" size="lg" className="w-[149px]" disabled>
        로그인
      </Button>
      <Button
        variant="secondary"
        size="md"
        className="w-[149px]"
        // disabled
      >
        로그인
      </Button>
      <Input
        className="w-full"
        aria-invalid="false"
        disabled={false}
        placeholder="이메일을 입력해주세요"
      />
      <div>
      <SelectWrapper className="w-[180px]"/>
      <SelectWrapper className="w-[180px]" disabled/>
      </div>
    </div>
  )
}

type SelectWrapperProps = {
  open?: boolean;
  className?: string;
  disabled?: boolean;
};

const SelectWrapper = (props: SelectWrapperProps) => {
  const {open, ...rest} = props;
  return (
    <Select open={props.open}>
      <SelectTrigger {...rest}>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="light1">Light</SelectItem>
        <SelectItem value="dark1">Dark</SelectItem>
        <SelectItem value="system1">System</SelectItem>
        <SelectItem value="light2">Light</SelectItem>
        <SelectItem value="dark2">Dark</SelectItem>
        <SelectItem value="system2">System</SelectItem>
        <SelectItem value="light3">Light</SelectItem>
        <SelectItem value="dark3">Dark</SelectItem>
        <SelectItem value="system3">System</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default HomePage
