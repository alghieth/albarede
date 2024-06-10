import { IoPersonOutline } from "react-icons/io5";
import { GiPipeOrgan } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";

let ServicesData = [
    {id: '1', icon:<IoPersonOutline />   , title: 'الأفراد', info:'نقدم الاستشارات والتوصيات والدراسات القانونية والشرعية أيضا شفهية ومكتوبة' },
    {id: '2', icon:<BsBuildings /> , title: 'الشركات', info:'تقديم المشورة القانونية حول البناء التنظيمي الموائم للشركة. تنظيم شؤون الإدارة وتشكيل المجلس واختيار الأعضاء وتحديد الأدوار المتعلقة بالإدارات التنفيذية. مراجعة الإقرارات السنوية والميزانيات.' },
    {id: '3', icon:<GiPipeOrgan />, title: 'المؤسسات', info:'إعداد اللوائح والانضباط بتحديد السياسات العامة وسياسة الاستثمار وجمع التبرعات' }
]

export default ServicesData;