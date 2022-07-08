export const useSortToday = () => {
    function sortByDeadline(a, b) {
        if (a.deadline === 'deadline' && b.deadline !== 'deadline') {
            return -1;
        } else if (a.deadline === 'deadline' && b.deadline === 'deadline') {
            if (a.important && b.important) {
                if (!a.time && b.time) {
                    return 1;
                } else if (Number(a.time.replace(':', '') > Number(b.time.replace(':', '')))) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a.important && !b.important) {
                return -1
            } else if (!a.important && b.important) {
                return 1
            }
        } else if (a.deadline !== 'deadline' && b.deadline === 'deadline') {
            return 1;
        } else if (a.deadline === 'exact time' && b.deadline === 'exact time') {
            if (a.important && b.important) {
                if (Number(a.time.replace(':', '') > Number(b.time.replace(':', '')))) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (a.important && !b.important) {
                return -1
            } else if (!a.important && b.important) {
                return 1
            } else {
                return 0;
            }
        }
    }
    return {
        sortByDeadline,
    }
}