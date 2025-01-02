import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PersonalInfoField {
  label: string;
  placeholder: string;
  type?: string;
  gridSpan?: boolean;
}

interface AddressField {
  label: string;
  placeholder: string;
}

const personalInfoFields: PersonalInfoField[] = [
  {
    label: "First Name",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    placeholder: "Enter your last name",
  },
  {
    label: "Street Address",
    placeholder: "",
  },
  {
    label: "City",
    placeholder: "",
    type: "date",
  },
  {
    label: "Phone number",
    placeholder: "Enter your phone number",
    type: "tel",
  },
];

const addressFields: AddressField[] = [
  {
    label: "Country",
    placeholder: "Select your country",
  },
  {
    label: "City",
    placeholder: "Enter your city",
  },
  {
    label: "Address",
    placeholder: "Enter your address",
  },
  {
    label: "Postal code",
    placeholder: "Enter your postal code",
  },
];

const PersonalInfoForm: React.FC = () => (
  <div className="grid gap-6 overflow-y-auto">
    <div className="grid gap-4 sm:grid-cols-2">
      {personalInfoFields.map((field, index) => (
        <>
          {/* <HunzoCustomLoginInput control={[]} /> */}
          <div key={index} className="space-y-2">
            <Label className="text-sm text-muted-foreground">
              {field.label}
            </Label>
            <Input
              type={field.type || "text"}
              placeholder={field.placeholder}
            />
          </div>
        </>
      ))}
    </div>

    <Separator className="my-4" />

    <h3 className="text-lg font-medium">Personal Address</h3>

    <div className="grid gap-4 sm:grid-cols-2">
      {addressFields.map((field, index) => (
        <div key={index} className="space-y-2">
          <label className="text-sm text-muted-foreground">{field.label}</label>
          <Input placeholder={field.placeholder} />
        </div>
      ))}
    </div>
  </div>
);

const HunzoSettingsPersonalInformationSection: React.FC = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Personal Information</h2>
      </div>

      <div className="mb-8 flex md:flex-col justify-center items-center gap-4 w-full ">
        <Avatar className="size-24 border-4 border-hunzo-blue">
          <AvatarImage src="/placeholder/image 8.png" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-center ">
          <h3 className="font-bold text-lg">Hugh Scott</h3>
          <span className="text-hunzo-pitch-black/60 text-sm">@taghugh1</span>
        </div>
        <div className="space-x-4">
          <Button className="bg-hunzo-blue font-semibold text-white">
            Upload new pictures
          </Button>
          <Button className="bg-hunzo-red font-semibold text-white">
            Delete
          </Button>
        </div>
      </div>
      <PersonalInfoForm />
      <div className="mt-8 flex justify-end">
        <Button className="bg-hunzo-blue text-white">Edit Details</Button>
      </div>
    </>
  );
};

export default HunzoSettingsPersonalInformationSection;
