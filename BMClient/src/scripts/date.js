export function getFormattedDate() {
    const date = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dayOfWeek = days[date.getDay()];

    const dayOfMonth = date.getDate();

    const month = months[date.getMonth()];

    const year = date.getFullYear();

    const istOffset = 5.5 * 60; // IST offset in minutes
    const localTime = date.getTime();
    const istTime = new Date(localTime + (istOffset * 60 * 1000));

    const hours = String(istTime.getUTCHours()).padStart(2, '0');
    const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');

    // Timezone representation for IST
    const timezone = '+0530';

    const formattedDate = `${dayOfWeek}, ${String(dayOfMonth).padStart(2, '0')} ${month} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;
    
    return formattedDate;
}