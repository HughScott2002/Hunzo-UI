import { Button } from "./ui/button";

const HunzoLoginAndSecuritySection = () => {
  return (
    <div className="size-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Security</h2>
      </div>
      <div className="size-full rounded-2xl">
        <div className="flex justify-between items-">
          <div>
            <h4 className="text-lg font-semibold">Password</h4>
            <span className="text-hunzo-text-grey">
              Set a unique password to protect your account
            </span>
          </div>
          <Button className="bg-hunzo-background-grey rounded-full text-hunzo-blue font-semibold">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HunzoLoginAndSecuritySection;
