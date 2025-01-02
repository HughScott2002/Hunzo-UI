"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertCircle,
  Key,
  LogIn,
  LogOut,
  Mail,
  Smartphone,
} from "lucide-react";

const HunzoLoginAndSecuritySection = () => {
  return (
    <div className="size-full flex flex-col gap-2 ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Security</h2>
      </div>

      <div className="overflow-y-auto">
        {/* Password Section */}
        <div className="w-full rounded-2xl mb-8 ">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold">Password</h4>
              <span className="text-hunzo-text-grey">
                Set a unique password to protect your account
              </span>
            </div>
            <ChangePasswordComponent />
          </div>
        </div>

        {/* Two Factor Authentication Section */}
        <div className="w-full rounded-2xl mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold">
                Two-factor authentication
              </h4>
              <span className="text-hunzo-text-grey">
                Two-factor authentication (2FA) helps accounts secure by adding
                an extra layer of protection beyond a password. By default, we
                require you to set up a 2FA app that can generate 2FA codes, but
                you can add a security key to log in even quicker.
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Added on</TableHead>
                  <TableHead>Must recent activity</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Backup codes (8/10 remaining)</TableCell>
                  <TableCell>Nov 25, 2024 at 12:00 AM</TableCell>
                  <TableCell>Dec 18, 2024 at 12:00 AM</TableCell>
                  <TableCell>
                    <Button variant="link" className="text-hunzo-blue p-0">
                      Generate New Codes
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2FA app (Third-party)</TableCell>
                  <TableCell>Nov 25, 2024 at 12:00 AM</TableCell>
                  <TableCell>Dec 31, 2024 at 12:00 AM</TableCell>
                  <TableCell>
                    <Button variant="link" className="text-hunzo-blue p-0">
                      Reset
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Active Sessions Section */}
        <div className="w-full rounded-2xl mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-semibold">Active sessions</h4>
              <span className="text-hunzo-text-grey">
                All sessions currently logged in with jane@demo.mercurycom:
              </span>
            </div>
            <Button variant="link" className="text-hunzo-blue">
              Log Out Other Sessions
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Browser</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Most recent activity</TableHead>
                <TableHead>IP address</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Chrome (Linux)</TableCell>
                <TableCell>United States</TableCell>
                <TableCell>Current Session</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>
                  <Button variant="ghost" className="p-0">
                    ×
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Firefox</TableCell>
                <TableCell>France</TableCell>
                <TableCell>Jan 1 at 12:00 AM</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>
                  <Button variant="ghost" className="p-0">
                    ×
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Remembered Devices Section */}
        <div className="w-full rounded-2xl mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-semibold">Remembered devices</h4>
              <span className="text-hunzo-text-grey">
                Two-factor authentication on these devices has been remembered
                for 30 days.
              </span>
            </div>
            <Button variant="link" className="text-hunzo-blue">
              Forget Other Devices
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Most recent activity</TableHead>
                <TableHead>IP address</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Chrome (Linux)</TableCell>
                <TableCell>United States</TableCell>
                <TableCell>Current Device</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>
                  <Button variant="ghost" className="p-0">
                    ×
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Firefox</TableCell>
                <TableCell>France</TableCell>
                <TableCell>Jan 1 at 12:00 AM</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>
                  <Button variant="ghost" className="p-0">
                    ×
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Activity History Section */}
        <div className="w-full rounded-2xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-lg font-semibold">Activity history</h4>
              <span className="text-hunzo-text-grey">
                Here are the last 30 days of activity on your account:
              </span>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>IP address</TableHead>
                <TableHead>Date and time</TableHead>
                <TableHead>Country</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Log in failure
                </TableCell>
                <TableCell>Chrome (Linux)</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>Jan 2, 12:22 PM</TableCell>
                <TableCell>United States</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Log in two-factor auth failure
                </TableCell>
                <TableCell>Firefox</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>Jan 1, 12:00 AM</TableCell>
                <TableCell>France</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <LogIn className="h-4 w-4 text-gray-500" />
                  Log in
                </TableCell>
                <TableCell>Safari (Mac OS X, 10.14)</TableCell>
                <TableCell>2001:0db8:85a3:00...</TableCell>
                <TableCell>Dec 31, 12:00 AM</TableCell>
                <TableCell>Finland</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-gray-500" />
                  Log in backup code used
                </TableCell>
                <TableCell>iOS App</TableCell>
                <TableCell>2001:0db8:85a3:00...</TableCell>
                <TableCell>Jan 2, 12:00 AM</TableCell>
                <TableCell>Cayman Islands</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Log in backup code auth failure
                </TableCell>
                <TableCell>Android App</TableCell>
                <TableCell>2001:0db8:85a3:00...</TableCell>
                <TableCell>Jan 2, 12:00 AM</TableCell>
                <TableCell>United States</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-gray-500" />
                  Two-factor auth enabled
                </TableCell>
                <TableCell>Chrome (Linux)</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>Jan 2, 12:22 PM</TableCell>
                <TableCell>United States</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <LogOut className="h-4 w-4 text-gray-500" />
                  Log out
                </TableCell>
                <TableCell>PayPal, Amex, or other ser...</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>Sep 2, 12:00 AM</TableCell>
                <TableCell>United States</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-gray-500" />
                  Password changed
                </TableCell>
                <TableCell>iOS App</TableCell>
                <TableCell>2001:0db8:85a3:00...</TableCell>
                <TableCell>Jan 2, 12:00 AM</TableCell>
                <TableCell>Cayman Islands</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  Email change requested
                </TableCell>
                <TableCell>Firefox</TableCell>
                <TableCell>127.0.0.1</TableCell>
                <TableCell>Jan 1, 12:00 AM</TableCell>
                <TableCell>France</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
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
            <Input
              id="current"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new">New Password</Label>
            <Input id="new" type="password" placeholder="Enter new password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm New Password</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="Confirm new password"
            />
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
