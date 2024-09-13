import language from '../../assets/images/icons/language.svg';
import money from '../../assets/images/icons/money.svg';
import tool1Icon from '../../assets/images/tools/1.png';
import tool2Icon from '../../assets/images/tools/2.png';
import tool3Icon from '../../assets/images/tools/3.png';
import tool4Icon from '../../assets/images/tools/4.png'

export default [
    {
        id: 1,
        title: "মূল্য অস্থিরতা ভবিষ্যদ্বাণীকারী",
        subTitle: "বর্তমান প্রবণতার উপর ভিত্তি করে ভবিষ্যতের দাম পূর্বাভাস করুন",
        output: "₹ 2250 থেকে ₹ 2500 একটি বড় ব্যাপার",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: { color: "#ffffff", backgroundImage: `url(${tool1Icon})` },
    },
    {
        id: 2,
        title: "বাজার প্রবণতা বিশ্লেষণ সরঞ্জাম",
        subTitle: "তথ্যসমৃদ্ধ সিদ্ধান্ত নিতে বাজারের প্রবণতা বিশ্লেষণ করুন",
        output: "₹ 2250 থেকে ₹ 2500 একটি বড় ব্যাপার",
        img: money,
        path: '/market-trend-analysis',
        styles: { color: "#ffffff", backgroundImage: `url(${tool3Icon})` },
    },
    {
        id: 3,
        title: "বাফার স্টক মূল্য বিশ্লেষণ",
        subTitle: "বাফার স্টকের দাম এবং সর্বোত্তম ফসল কাটার কৌশল মূল্যায়ন করুন",
        img: language,
        newTab: false,
        path: '/buffer-stock-price-analysis',
        pathNewTab: "http://127.0.0.1:5000",
        styles: { backgroundImage: `url(${tool2Icon})` },
    },
    {
        id: 4,
        title: "বপন থেকে বিক্রি ড্যাশবোর্ড",
        subTitle: "রিয়েল-টাইম প্রাইসিং সহ আপনার ফসলের যাত্রাকে শক্তিশালী করা",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    },
    {
        id: 5,
        title: "খাদ্য মূল্য পর্যবেক্ষণ ব্যবস্থা",
        subTitle: "প্রবণতা বিশ্লেষণ করুন এবং তথ্যভিত্তিক সিদ্ধান্ত নিন",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    }
];


