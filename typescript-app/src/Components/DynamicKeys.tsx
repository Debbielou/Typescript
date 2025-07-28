type DynamicKeysProps = {
  data: Record<string, any>;
  keys: string[];
};

//use the keys to dynamically access properties in the data object
const DynamicKeys: React.FC<DynamicKeysProps> = ({ data, keys }) => {
  return (
    <div>
      {keys.map((key) => (
        <div key={key}>
          <strong>{key}:</strong> {data[key] !== undefined ? data[key].toString() : 'N/A'}
        </div>
      ))}
    </div>
  );
}
export default DynamicKeys;
