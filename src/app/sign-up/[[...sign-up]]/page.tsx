import {  SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 absolute">
      <SignUp />
    </div>
  )
}