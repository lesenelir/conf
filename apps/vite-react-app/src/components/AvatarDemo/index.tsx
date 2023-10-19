import { Avatar, AvatarFallback, AvatarImage } from '@lesenelir/ui'

function AvatarDemo() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  )
}

export default AvatarDemo
