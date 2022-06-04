
// A customized HR component
const HR = ({color = "white"}) => (
    <hr
        style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            border: 0,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            backgroundColor: color,
            minHeight: "1px",
            width: "100%"
        }}
    />
);

export default HR