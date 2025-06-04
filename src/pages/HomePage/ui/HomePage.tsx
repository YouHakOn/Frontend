import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input/input"

const HomePage = () => {
  return (
    <div>
      {/* test */}
      <Button
        variant="filled"
        size="lg"
        className='w-[149px]'
        disabled
      >
        로그인
      </Button>
      <Button
        variant="secondary"
        size="md"
        className='w-[149px]'
        // disabled
      >
        로그인
      </Button>
      <Input className="w-full" aria-invalid="false" disabled={false} placeholder="이메일을 입력해주세요"/>
    </div>
  )
}

export default HomePage
