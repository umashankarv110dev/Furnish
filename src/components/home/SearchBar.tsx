import { TextInput } from "react-native";

export default function SearchBar() {
  return (
    <TextInput
      placeholder="Search Furniture..."
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
      }}
    />
  );
}