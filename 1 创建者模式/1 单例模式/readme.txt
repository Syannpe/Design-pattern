单例模式(singleton Pattern)是 Java 中最简单的设计模式之这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式,可以直接访问，不需要实例化该类的对象。
单例模式的主要有以下角色
·单例类。只能创建一个实例的类
·访问类。使用单例类
单例设计模式分类两种:
·饿汉式: 类加载就会导致该单实例对象被创建
如果对象比较大而且一直不用的话会造成内存的浪费
·懒汉式: 类加载不会导致该单实例对象被创建，而是首次使用该对象时才会创建
枚举方式
枚举类实现单例模式是极力推荐的单例实现模式，因为枚举类型是线程安全的，并且只会装载一次，
设计者充分的利用了枚举的这个特性来实现单例模式，枚举的写法非常简单，
而且枚举类型是所用单例实现中唯-一种不会被破坏的单例实现模式。