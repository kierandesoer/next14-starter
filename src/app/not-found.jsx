import Link from "next/link";

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, these are not the droids you are looking for!</p>
        <Link href="/ ">Return Home</Link>
    </div>
  )
};

export default NotFound;