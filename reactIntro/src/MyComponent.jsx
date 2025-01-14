import MyChildComponent from "./MyChildComponent";
export default function MyComponent(props) {
  return (
    <div>
      <MyChildComponent name={props.name} />
    </div>
  );
}
