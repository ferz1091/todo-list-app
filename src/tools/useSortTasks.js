export const useSortTasks = () => {
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
    function sortCompletedFromLists(a, b) {
        if (a.important && !b.important) {
            return -1;
        } else if (!a.important && b.important) {
            return 1;
        } else if ((Number(a.time.replace(':', '') > Number(b.time.replace(':', ''))))) {
            return 1;
        } else {
            return -1;
        }
    }
    function sortUnplanned(a, b) {
        if (a.important && !b.important) {
            return -1;
        } else if (!a.important && b.important) {
            return 1;
        } else if (new Date(`${a.created.slice(6, 10)}-${a.created.slice(3, 5)}=${a.created.slice(0, 2)}`) > new Date(`${b.created.slice(6, 10)}-${b.created.slice(3, 5)}=${b.created.slice(0, 2)}`)) {
            return -1;
        } else if (new Date(`${a.created.slice(6, 10)}-${a.created.slice(3, 5)}=${a.created.slice(0, 2)}`) < new Date(`${b.created.slice(6, 10)}-${b.created.slice(3, 5)}=${b.created.slice(0, 2)}`)) {
            return 1;
        } else {
            return 0
        }
    }
    function sortPlanned(a, b) {
        if (new Date(a.date) > new Date(b.date)) {
            return 1;
        } else if (new Date(a.date) < new Date(b.date)) {
            return -1;
        } else if (a.important && !b.important) {
            return -1;
        } else if (!a.important && b.important) {
            return 1;
        } else if (a.time && !b.time) {
            return -1;
        } else if (!a.time && b.time) {
            return 1;
        } else if (Number(a.time.replace(':', '')) > Number(b.time.replace(':', ''))) {
            return 1;
        } else if (Number(a.time.replace(':', '')) < Number(b.time.replace(':', ''))) {
            return -1;
        }
    }
    function sortList(a, b) {
        if (a.date && !b.date) {
            return -1;
        } else if (!a.date && b.date) {
            return 1;
        } else if (new Date(a.date) > new Date(b.date)) {
            return 1;
        } else if (new Date(a.date) < new Date(b.date)) {
            return -1;
        } else if (a.important && !b.important) {
            return -1;
        } else if (!a.important && b.important) {
            return 1;
        } else if (a.time && !b.time) {
            return -1;
        } else if (!a.time && b.time) {
            return 1;
        } else if (Number(a.time.replace(':', '')) > Number(b.time.replace(':', ''))) {
            return 1;
        } else if (Number(a.time.replace(':', '')) < Number(b.time.replace(':', ''))) {
            return -1;
        }
    }

    return {
        sortByDeadline,
        sortCompletedFromLists,
        sortUnplanned,
        sortPlanned,
        sortList,
    }
}