import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";

interface SignatureProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  website: string;
  image: string;
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const SignatureOne = (props: SignatureProps) => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "#000",
        maxWidth: "600px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        border: "2px solid #e0e0e0",
        borderRadius: "10px",
        gap: "20px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ borderRight: "2px solid #3b5998", padding: "0 20px" }}>
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name}'s profile`}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ddd",
              marginBottom: "20px",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {props.socialMedia.facebook && (
            <a
              href={props.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b5998" }}
            >
              <Facebook size={24} />
            </a>
          )}
          {props.socialMedia.linkedin && (
            <a
              href={props.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5" }}
            >
              <Linkedin size={24} />
            </a>
          )}
          {props.socialMedia.instagram && (
            <a
              href={props.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e1306c" }}
            >
              <Instagram size={24} />
            </a>
          )}
          {props.socialMedia.twitter && (
            <a
              href={props.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1da1f2" }}
            >
              <Twitter size={24} />
            </a>
          )}
          {props.socialMedia.youtube && (
            <a
              href={props.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff0000" }}
            >
              <Youtube size={24} />
            </a>
          )}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            margin: 0,
            lineHeight: "1.2",
          }}
        >
          {props.name}
        </h2>
        <p
          style={{
            margin: "5px 0",
            fontWeight: "600",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Phone size={16} color="#4CAF50" />
          {props.phone}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Mail size={16} color="#FF5722" />
          {props.email}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MapPin size={16} color="#2196F3" />
          {props.location}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Globe size={16} color="#9C27B0" />
          <a
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0073e6", textDecoration: "none" }}
          >
            {props.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignatureOne;
