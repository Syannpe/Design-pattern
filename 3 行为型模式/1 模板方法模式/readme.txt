在面向对象程序设计过程中，程序员常常会遇到这种情况:设计一个系统时知道了算法所需的关键步骤，
而且确定了这些步骤的执行顺序，但某些步骤的具体实现还未知，或者说某些步骤的实现与具体的环境相关。

例如，去银行办理业务一般要经过以下4个流程:取号、排队、办理具体业务、对银行工作人员进行评分等，
其中取号、排队和对银行工作人品进行评分的业务对每个客户是一样的，可以在父类中实现，
但是办理县体业务却因人而异，它可能是存款、取款或者转账等，可以延迟到子类中实现。
定义:
定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤

模板方法(Template Method)模式包含以下主要角色:
·抽象类(Abstract class):负责给出一个算法的轮廓和骨架。它由一个模板方法和若干个基本方法构成。
    ·模板方法:定义了算法的骨架，按某种顺序调用其包含的基本方法。
    ·基本方法:是实现算法各个步骤的方法，是模板方法的组成部分。基本方法又可以分为三种:
        ·抽象方法(Abstract Method):一个抽象方法由抽象类声明、由其具体子类实现。
        ·具体方法(concrete Method):一个具体方法由一个抽象类或具体类声明并实现，其子类可以进行覆盖也可以直接继承。
        ·钩子方法(Hook Method):在抽象类中已经实现，包括用于判断的逻辑方法和需要子类重写的空方法两种。
        一般钩子方法是用于判断的逻辑方法，这类方法名一般为isXXX，返回值类型为boolean类型。
·具体子类(Concrete class):实现抽象类中所定义的抽象方法和钩子方法，它们是一个顶级逻辑的组成步骤,

【例】炒菜
炒菜的步骤是固定的，分为倒油、热油、倒蔬菜、倒调料品、翻炒等步骤。现通过模板方法模式来用代码模拟。类图如下：


6.1.3 优缺点
优点:
·提高代码复用性
将相同部分的代码放在抽象的父类中，而将不同的代码放入不同的子类中。
实现了反向控制
通过一个父类调用其子类的操作，通过对子类的具体实现扩展不同的行为，实现了反向控制 ，并符合“开闭原则”。缺点:
。对每个不同的实现都需要定义一个子类，这会导致类的个数增加，系统更加庞大，设计也更加抽象。，父类中的抽象方法由子类实现，子类执行的结果会影响父类的结果，这导致一种反向的控制结构，它提高了代码阅读的难度
6.1.4 适用场景
算法的整体步骤很固定，但其中个别部分易变时，这时候可以使用模板方法模式，将容易变的部分抽象出来，供子类实现。需要通过子类来决定父类算法中某个步骤是否执行，实现子类对父类的反向控制。