function Uni(name: string): any {
    console.log(`Инициализация: ${name}`);
    return function () {
        console.log(`Вызов: ${name}`);
    }
}

@Uni("Класс")
class MyClass {
    @Uni("Свойство")
    props0?: any;

    @Uni("Свойство static")
    static props1?: any;

    @Uni("Метод")
    method0(@Uni("Параметр метода") _: any) {}

    @Uni("Метод static")
    static method1(@Uni("Параметр метода static") _: any) {}

    constructor(@Uni("Параметр конструктора") _: any) {
    }
}
