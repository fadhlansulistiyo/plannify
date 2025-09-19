import { Badge } from '@/Components/ui/badge';
import { STATUS } from '@/lib/utils';

export function GetStatusBadge({ status }) {
    const { TODO, IN_PROGRESS, ON_REVIEW, DONE, UNKNOWN } = STATUS;

    let badge, text;

    switch (status) {
        case TODO:
            badge = 'bg-red-500 hover:bg-red-600';
            text = URGENT;
            break;
        case IN_PROGRESS:
            badge = 'bg-yellow-500 hover:bg-yellow-600';
            text = HIGH;
            break;
        case ON_REVIEW:
            badge = 'bg-blue-500 hover:bg-blue-600';
            text = MEDIUM;
            break;
        case DONE:
            badge = 'bg-green-500 hover:bg-green-600';
            text = LOW;
            break;
        default:
            badge = '';
            text = UNKNOWN;
            break;
    }

    return <Badge className={badge}>{text}</Badge>;
}
