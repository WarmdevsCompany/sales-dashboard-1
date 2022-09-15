export function findCreatedNotificationTime(date) {
    const currentDate = new Date();
    const createdDate = new Date(date);
    const createdTime = currentDate.getTime() - createdDate.getTime();
    return msToTime(createdTime);
}
function msToTime(duration) {
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    var days = parseInt(duration / (1000 * 60 * 60 * 24));
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    }
}