import FillButton from "../../components/common/buttons/FillButton.tsx";
import { Mail, Phone, GitHub, LinkedIn } from "@mui/icons-material";
import { SocialLinks } from "../../utils/links.ts";
function AllContacts() {
  const contacts = [
    {
      icon: Mail,
      desc: SocialLinks.mail,
      to: `mailto:${SocialLinks.mail}?subject=Project%20Inquiry`,
    },
    {
      icon: Phone,
      desc: SocialLinks.phone,
      to: `tel:${SocialLinks.phone}`,
    },
    {
      icon: GitHub,
      desc: "GitHub",
      to: SocialLinks.gitHub,
    },
    {
      icon: LinkedIn,
      desc: "LinkedIn",
      to: SocialLinks.linkedIn,
    },
  ];
  return (
    <div className="flex gap-3">
      {contacts.map((contact, index) => {
        return (
          <div key={index} className="flex justify-center items-center gap-2">
            <FillButton variant="icon">{<contact.icon />}</FillButton>
            <a
              href={contact.to}
              className="font-body text-text text-sm hidden lg:block"
            >
              {contact.desc}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default AllContacts;
