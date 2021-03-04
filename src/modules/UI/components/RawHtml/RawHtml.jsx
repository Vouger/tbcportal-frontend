export default function RawHtml(props) {
    const {children} = props;
    return (
        <div dangerouslySetInnerHTML={{__html: children}}></div>
    )
}