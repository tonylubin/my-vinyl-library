import Heading from '@/components/Heading';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[url('../public/images/blocks-T3mKJXfdims-unsplash.jpg')] bg-cover h-full font-bioRhyme">
      <div className=' flex flex-col items-end gap-y-8 pt-20 pr-10 text-primary-heading'>
        <Heading styles={"text-7xl font-extrabold font-bioRhyme text-primary-heading text-center"} />
        <Link href="/tracks" className='text-2xl underline underline-offset-2 decoration-2 mr-8'>Enter the Library</Link>
      </div>
    </div>
  )
};