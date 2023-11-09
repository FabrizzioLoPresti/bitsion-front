import ComposePost from '@/components/compose-post'

type Props = {}

export default function CreateClientePage({}: Props) {
  return (
    <div className='mx-auto max-w-7xl'>
      <ComposePost />
    </div>
  )
}