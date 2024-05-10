import { Button } from "@material-tailwind/react";

export default function ButtonMT({ props, color }) {
  return (
    <Button variant="outlined" color={color}>
      {props}
    </Button>
  );
}
