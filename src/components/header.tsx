// import { useUser, SignIn, SignedOut, SignOutButton } from "@clerk/nextjs";

const Header = () => (
  <>
    {/* <SignOutButton />
    <Greeting />
    <SignedOut>
      <SignIn />
    </SignedOut> */}
  </>
);

// const Greeting = () => {
//   // Use the useUser hook to get the Clerk.user object
//   const { isLoaded, isSignedIn, user } = useUser();

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }
//   return <div>Hi, {user.firstName}</div>;
// };

export default Header;
