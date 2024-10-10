import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface WalletCardProps {
  businessName: string;
  cardType?: string;
  cardNumber?: string;
  expiryDate?: string;
  isActive?: boolean;
  onToggle?: (active: boolean) => void;
}

export default function WalletCard({
  businessName,
  cardType = "Business Debit",
  cardNumber = "•••• •••• •••• 1234",
  expiryDate = "12/25",
  isActive = true,
  onToggle,
}: WalletCardProps) {
  return (
    <div className="w-full max-w-md">
      <div
        className={cn(
          "relative w-full aspect-[1.586/1] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300",
          isActive ? "opacity-100" : "opacity-50"
        )}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white opacity-5"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          <div className="flex justify-between items-start">
            <p className="text-sm font-light tracking-wider">{cardType}</p>
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 8V12M12 16H12.01" />
              </svg>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-7 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-md"></div>
              <p className="text-xs tracking-wider opacity-75">Chip</p>
            </div>
            <p className="text-lg tracking-widest">{cardNumber}</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs opacity-75 mb-1">Card Holder</p>
                <p className="font-medium tracking-wider">{businessName}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-75 mb-1">Expires</p>
                <p className="font-medium">{expiryDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <Switch
            checked={isActive}
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-green-500"
            aria-label="Toggle card active state"
          />
        </div>
      </div>
    </div>
  );
}
