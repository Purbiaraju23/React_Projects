export const WEBSERVER_OPTIONS = [
  { value: "", label: "-- Choose a Server --" },
  { value: "apache", label: "Apache HTTP Server" },
  { value: "nginx", label: "Nginx" },
  { value: "IIS", label: "Microsoft Internet Information Services" },
  { value: "litespeed", label: "LiteSpeed Web Server" },
  { value: "caddy", label: "Caddy" },
];

export const ROLES = ["Admin", "Engineer", "Manager", "Intern"];
export const SERVICES = ["Mail", "Payroll", "Self-service"];
export const VALIDPASSWORD = /^(?=.*\d).{8,}$/;
export const VALID_USERNAME_REGEX = /^[a-zA-Z0-9_-]{3,16}$/;
