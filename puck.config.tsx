import { DropZone, type Config } from "@measured/puck";
import { text } from "stream/consumers";

type Props = {
  HeadingBlock: { title: string };
  GridBlock: {};
  CardBlock: {
    title: String;
    description: String;
    padding: number;
    variant: String;
    bgColor: String;
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div className="text-4xl font-bold p-4">
          <h1>{title}</h1>
        </div>
      ),
    },
    GridBlock: {
      render : () => {
        return <DropZone zone="my-grid" 
         className="grid grid-cols-3 gap-4 p-4"
        />
      }
    },
    CardBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        padding : { type: "number" },
        variant: { type: "select", options: [{ label: "Outlined", value: "border rounded-md" }, 
          { label: "Floating", value: "shadow-md" }] },
        bgColor: { 
          type: "select",
          options: [
            { label: "Inherit", value: "inherit" },
            { label: "Blue", value: "blue-500" },
            { label: "Black", value: "black" },
            { label: "Gray", value: "gray-900" },
            { label: "Yellow", value: "yellow-100" },
          ]
         }
      },
      defaultProps: {
        title: "Title",
        description: "This is a description...",
        padding: 16,
        variant: "border rounded-md",
        bgColor: "inherit"
      },
      render: ({ title, description, padding, variant, bgColor }) => {
        return <div style={{ padding }} className={`${variant} bg-${bgColor}`} >
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>      
      }
    }
  },
};

export default config;
