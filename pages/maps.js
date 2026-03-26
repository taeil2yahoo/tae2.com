import Image from 'next/image'

import Footer from "../components/footer"

export default function Maps() {
  return (
    <>
      <h2>Chicago</h2>
      <Image
        alt="Downtown Chicago"
        src="/maps/chicago1.png"
        // layout="fill"
        width={926}
        height={731}
      />
      <Image
        alt="Chicago"
        src="/maps/chicago2.png"
        width={478}
        height={672}
      />
      <h2>Seattle</h2>
      <Image
        alt="Seattle"
        src="/seattle.png"
        width={1007}
        height={711}
      />
      <h2>All</h2>
      <Image
        alt="Downtown Chicago"
        src="/maps/all.png"
        width={1251}
        height={691}
      />
      <p>There might still be some things missing.</p>
      {/* <Footer /> */}
    </>
  );
}