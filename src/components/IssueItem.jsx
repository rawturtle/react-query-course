import {GoComment, GoIssueClosed, GoIssueOpened} from "react-icons/all";
import {Link} from "react-router-dom";
import {relativeDate} from "../../../react-query-course/src/helpers/relativeDate";

export function IssueItem({
      title,
      number,
      asignee,
      commentCount,
      createdBy,
      createdDate,
      labels,
      status,
  }) {
    return (
        <li>
            <div>
                {status === "done" || status === "cancelled"
                    ? <GoIssueClosed style={{color: "red"}}/>
                    : <GoIssueOpened style={{color: "green"}}/>
                }
            </div>
            <div className="issue-content">
                <span><Link to={`/issue/${number}`}>{title}</Link>
                    {labels.map((label) => (
                        <span key={label} className={`label red`}>
                            {label}
                        </span>
                    ))}
                </span>
                <small>
                    #{number} opened {relativeDate(createdDate)} by {createdBy}
                </small>
            </div>
            {asignee ? <div>{asignee}</div> : null}
            <span className="comment-count">
                {commentCount > 0
                    ? <><GoComment/>{commentCount}</>
                    : null
                }
            </span>
        </li>
    )
}