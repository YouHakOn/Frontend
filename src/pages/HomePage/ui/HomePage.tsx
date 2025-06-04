import { Button } from "@shared/ui/button/button"

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
    </div>
  )
}

export default HomePage
