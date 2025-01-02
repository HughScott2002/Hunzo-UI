import { Button } from "./ui/button";
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
  X,
} from "lucide-react";
const iconMap = {
  alert: AlertCircle,
  key: Key,
  login: LogIn,
  logout: LogOut,
  mail: Mail,
  smartphone: Smartphone,
};

export const twoFactorMethods: TwoFactorMethod[] = [
  {
    method: "Backup codes (8/10 remaining)",
    addedOn: "Nov 25, 2024 at 12:00 AM",
    recentActivity: "Dec 18, 2024 at 12:00 AM",
    action: "Generate New Codes",
  },
  {
    method: "2FA app (Third-party)",
    addedOn: "Nov 25, 2024 at 12:00 AM",
    recentActivity: "Dec 31, 2024 at 12:00 AM",
    action: "Reset",
  },
];

export const activeSessions: ActiveSession[] = [
  {
    browser: "Chrome (Linux)",
    country: "United States",
    recentActivity: "Current Session",
    ipAddress: "127.0.0.1",
  },
  {
    browser: "Firefox",
    country: "France",
    recentActivity: "Jan 1 at 12:00 AM",
    ipAddress: "127.0.0.1",
  },
];

export const rememberedDevices: RememberedDevice[] = [
  {
    deviceName: "Chrome (Linux)",
    country: "United States",
    recentActivity: "Current Device",
    ipAddress: "127.0.0.1",
  },
  {
    deviceName: "Firefox",
    country: "France",
    recentActivity: "Jan 1 at 12:00 AM",
    ipAddress: "127.0.0.1",
  },
];

export const activityHistory: ActivityEvent[] = [
  {
    event: "Log in failure",
    icon: "alert",
    isError: true,
    source: "Chrome (Linux)",
    ipAddress: "127.0.0.2",
    dateTime: "Jan 2, 12:22 PM",
    country: "United States",
  },
  {
    event: "Log in two-factor auth failure",
    icon: "alert",
    isError: true,
    source: "Firefox",
    ipAddress: "127.0.0.1",
    dateTime: "Jan 1, 12:00 AM",
    country: "France",
  },
  {
    event: "Log in",
    icon: "login",
    source: "Safari (Mac OS X, 10.14)",
    ipAddress: "2001:0db8:85a3:00...",
    dateTime: "Dec 31, 12:00 AM",
    country: "Finland",
  },
  {
    event: "Log in backup code used",
    icon: "key",
    source: "iOS App",
    ipAddress: "2001:0db8:85a3:00...",
    dateTime: "Jan 2, 12:00 AM",
    country: "Cayman Islands",
  },
  {
    event: "Log in backup code auth failure",
    icon: "alert",
    isError: true,
    source: "Android App",
    ipAddress: "2001:0db8:85a3:00...",
    dateTime: "Jan 2, 12:00 AM",
    country: "United States",
  },
  {
    event: "Two-factor auth enabled",
    icon: "smartphone",
    source: "Chrome (Linux)",
    ipAddress: "127.0.0.1",
    dateTime: "Jan 2, 12:22 PM",
    country: "United States",
  },
  {
    event: "Log out",
    icon: "logout",
    source: "PayPal, Amex, or other ser...",
    ipAddress: "127.0.0.1",
    dateTime: "Sep 2, 12:00 AM",
    country: "United States",
  },
  {
    event: "Password changed",
    icon: "key",
    source: "iOS App",
    ipAddress: "2001:0db8:85a3:00...",
    dateTime: "Jan 2, 12:00 AM",
    country: "Cayman Islands",
  },
  {
    event: "Email change requested",
    icon: "mail",
    source: "Firefox",
    ipAddress: "127.0.0.1",
    dateTime: "Jan 1, 12:00 AM",
    country: "Jamaica",
  },
];

export const TwoFactorTable = ({ methods }: { methods: TwoFactorMethod[] }) => (
  <Table>
    <TableHeader>
      <TableRow className="font-bold text-sm">
        <TableHead>Method</TableHead>
        <TableHead>Added on</TableHead>
        <TableHead>Must recent activity</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {methods.map((method, index) => (
        <TableRow key={index}>
          <TableCell>{method.method}</TableCell>
          <TableCell>{method.addedOn}</TableCell>
          <TableCell>{method.recentActivity}</TableCell>
          <TableCell>
            <Button variant="link" className="text-hunzo-blue p-0">
              {method.action}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const ActiveSessionsTable = ({
  sessions,
}: {
  sessions: ActiveSession[];
}) => (
  <Table>
    <TableHeader>
      <TableRow className="font-bold text-sm">
        <TableHead>Browser</TableHead>
        <TableHead>Country</TableHead>
        <TableHead>Most recent activity</TableHead>
        <TableHead>IP address</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sessions.map((session, index) => (
        <TableRow key={index}>
          <TableCell>{session.browser}</TableCell>
          <TableCell>{session.country}</TableCell>
          <TableCell>{session.recentActivity}</TableCell>
          <TableCell>{session.ipAddress}</TableCell>
          <TableCell>
            <Button variant="ghost" className="p-0">
              <X className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const RememberedDevicesTable = ({
  devices,
}: {
  devices: RememberedDevice[];
}) => (
  <Table>
    <TableHeader className="font-bold text-sm">
      <TableRow>
        <TableHead>Device name</TableHead>
        <TableHead>Country</TableHead>
        <TableHead>Most recent activity</TableHead>
        <TableHead>IP address</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {devices.map((device, index) => (
        <TableRow key={index}>
          <TableCell>{device.deviceName}</TableCell>
          <TableCell>{device.country}</TableCell>
          <TableCell>{device.recentActivity}</TableCell>
          <TableCell>{device.ipAddress}</TableCell>
          <TableCell>
            <Button variant="ghost" className="p-0">
              <X className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const ActivityHistoryTable = ({
  events,
}: {
  events: ActivityEvent[];
}) => (
  <Table>
    <TableHeader>
      <TableRow className="font-bold text-sm">
        <TableHead>Event</TableHead>
        <TableHead>Source</TableHead>
        <TableHead>IP address</TableHead>
        <TableHead>Date and time</TableHead>
        <TableHead>Country</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="text-ellipsis">
      {events.map((event, index) => {
        const Icon = iconMap[event.icon];
        return (
          <TableRow key={index}>
            <TableCell className="flex items-center gap-4">
              <Icon
                className={`h-4 w-4 ${
                  event.isError ? "text-red-500" : "text-hunzo-blue"
                }`}
              />
              {event.event}
            </TableCell>
            <TableCell>{event.source}</TableCell>
            <TableCell>{event.ipAddress}</TableCell>
            <TableCell>{event.dateTime}</TableCell>
            <TableCell>{event.country}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
