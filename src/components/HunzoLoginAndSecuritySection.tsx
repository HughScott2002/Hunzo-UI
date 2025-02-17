"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  activeSessions,
  ActiveSessionsTable,
  activityHistory,
  ActivityHistoryTable,
  rememberedDevices,
  RememberedDevicesTable,
  twoFactorMethods,
  TwoFactorTable,
} from "./HunzoLoginAndSecuritySectionTables";
import { ScrollArea } from "@radix-ui/react-scroll-area";

// http://localhost/api/users/auth/security/sessions

// {
//   "activeSessions": [
//       {
//           "createdAt": "2025-01-18 02:38:17.954212733 +0000 UTC m=+1718.111082045",
//           "deviceInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:135.0) Gecko/20100101 Firefox/135.0",
//           "id": "faeee6cf-79e1-425c-9a0d-09116e324bb2",
//           "lastLoginAt": "2025-01-18 02:38:17.954212667 +0000 UTC m=+1718.111081979"
//       }
//   ]
// }
// TODO: Change jane@demo.mercurycom to the users Email

const HunzoLoginAndSecuritySection = () => {
  return (
    <div className="size-full flex flex-col gap-2 overflow-hidden">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Security</h2>
      </div>
      <ScrollArea className="h-full w-full  overflow-auto">
        <div className="pr-4">
          {" "}
          {/* Add padding to the right for scrollbar */}
          {/* Password Section */}
          <div className="w-full rounded-2xl mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold">Password</h4>
                <span className="text-hunzo-text-grey text-sm">
                  Set a unique password to protect your account
                </span>
              </div>
              <ChangePasswordComponent />
            </div>
          </div>
          {/* Two Factor Authentication Section */}
          {/* <div className="w-full rounded-2xl mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold">
                  Two-factor authentication
                </h4>
                <span className="text-hunzo-text-grey text-sm">
                  Two-factor authentication (2FA) helps accounts secure by
                  adding an extra layer of protection beyond a password. By
                  default, we require you to set up a 2FA app that can generate
                  2FA codes, but you can add a security key to log in even
                  quicker.
                </span>
              </div>
            </div>
            <div className="mt-6">
              <TwoFactorTable methods={twoFactorMethods} />
            </div>
          </div> */}
          {/* Active Sessions Section */}
          <div className="w-full rounded-2xl mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-lg font-semibold">Active sessions</h4>
                <span className="text-hunzo-text-grey text-sm">
                  All sessions currently logged in with change@mail.com:
                </span>
              </div>
              <Button className="bg-hunzo-background-grey rounded-full text-hunzo-blue font-semibold">
                Log Out Other Sessions
              </Button>
            </div>
            <ActiveSessionsTable sessions={activeSessions} />
          </div>
          {/* Activity History Section */}
          <div className="w-full rounded-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-lg font-semibold">Activity history</h4>
                <span className="text-hunzo-text-grey text-sm">
                  Here are the last 30 days of activity on your account:
                </span>
              </div>
            </div>
            <ActivityHistoryTable events={activityHistory} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

const ChangePasswordComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-hunzo-background-grey rounded-full text-hunzo-blue font-semibold">
          Change Password
        </Button>
      </DialogTrigger>

      <DialogOverlay className="bg-hunzo-pitch-black/80" />

      <DialogContent className="bg-hunzo-background-grey">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Enter your current password and a new password to update your
            credentials.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="current">Current Password</Label>
            <Input id="current" type="password" value={"123456789"} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new">New Password</Label>
            <Input id="new" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm New Password</Label>
            <Input id="confirm" type="password" />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="rounded-full bg-white">
            Cancel
          </Button>
          <Button className="rounded-full bg-hunzo-blue text-white">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HunzoLoginAndSecuritySection;
