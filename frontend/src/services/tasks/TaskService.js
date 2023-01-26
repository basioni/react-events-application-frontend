export class TaskService {

    getProductsSmall() {
        return fetch('data/tasks/tasksSample.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('data/tasks/tasksSample.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('data/tasks/tasksSample.json').then(res => res.json()).then(d => d.data);
    }
}
     