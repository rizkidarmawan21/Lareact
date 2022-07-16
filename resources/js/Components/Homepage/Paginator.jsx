import { Link } from "@inertiajs/inertia-react";
import Label from "../Label";


const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length-1].url;
    const current = meta.current_page;
    return (
        <div className="btn-group mb-6">
            {prev && <Link href={prev} className="btn btn-inline">«</Link>}
            {meta.links.map((link, i) => {
                if(i == meta.links.length-1 || i == 0) {
                    return ""
                }else {
                    return <Link key={i} href={link.url} className={`btn btn-outline ${link.active && "btn-active"} `}>{link.label}</Link>
                }
            })}
            {/* <Link className="btn">Page {current}</Link> */}
            {next && <Link href={next} className="btn btn-inline">»</Link> }
            
        </div>
    )
}


export default Paginator