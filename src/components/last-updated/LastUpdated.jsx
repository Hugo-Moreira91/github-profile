import { formatDistanceToNow } from "date-fns";

const LastUpdated = ({ date }) => {
    const result = formatDistanceToNow(new Date(date), {addSuffix: true}).replace("about", "");

    return result;
}

export { LastUpdated };