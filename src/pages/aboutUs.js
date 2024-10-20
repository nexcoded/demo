import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const aboutUs = () => {
	const features = [
		{
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_1.png",
			title: "استخراج مقاله از پایان‌نامه",
			content: "یکی از خدمات تخصصی ما در اپلای نست، استخراج مقاله از پایان‌نامه‌های دانشجویان کارشناسی ارشد و دکتری است. بسیاری از دانشجویان برای اخذ مجوز دفاع از پایان‌نامه نیاز به چاپ مقاله‌ای مرتبط با تحقیقات خود دارند. ما با بهره‌گیری از تیمی متخصص و با تجربه، این فرایند را به شکلی دقیق و حرفه‌ای انجام می‌دهیم. کارشناسان ما با بررسی پایان‌نامه شما، موضوعات و نکات کلیدی قابل استخراج را شناسایی کرده و آنها را در قالب یک مقاله علمی تدوین می‌کنند. این خدمات برای اطمینان از موفقیت در چاپ مقالات و دفاع سریع از پایان‌نامه بسیار حائز اهمیت است."
		},
		{
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_2.png",
			title: "نگارش مقالات برای مجلات معتبر",
			content: "نوشتن یک مقاله علمی که توانایی چاپ در مجلات برتر داخلی و خارجی را داشته باشد، نیازمند دقت، تخصص و تجربه فراوان است. در اپلای نست، تیمی از اساتید برتر دانشگاهی و پژوهشگران برجسته، نگارش مقالات علمی شما را به‌عهده می‌گیرند. ما در فرایند نگارش، تمامی استانداردهای علمی و نگارشی مورد نیاز مجلات معتبر را رعایت می‌کنیم تا شانس پذیرش و چاپ مقاله شما به حداکثر برسد. اگر به دنبال ارتقای رزومه علمی خود از طریق انتشار مقالات در مجلات با اعتبار بالا هستید، اپلای نست بهترین گزینه برای شماست.",
        },
		{
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "تقویت رزومه اپلای",
			content: "اپلای به دانشگاه‌های بین‌المللی و موسسات برتر جهان نیازمند یک رزومه قدرتمند و بی‌نقص است. در اپلای نست، با توجه به نیازهای خاص هر فرد، خدمات تقویت رزومه ارائه می‌شود. ما با بررسی دقیق تجربه‌ها، مهارت‌ها و دستاوردهای شما، رزومه‌ای می‌سازیم که به‌طور موثر نقاط قوت شما را برجسته کرده و شانس موفقیت در فرایند اپلای را افزایش می‌دهد. فرقی نمی‌کند که هدف شما اپلای برای مقطع کارشناسی، ارشد، دکتری یا حتی یک موقعیت شغلی باشد، ما در کنار شما خواهیم بود تا بهترین نسخه از رزومه خود را ارائه دهید.",
		},

        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "تقویت مهارت‌های زبانی و آمادگی برای آزمون‌های زبان",
			content: "یکی از مهمترین چالش‌های اپلای به دانشگاه‌های خارجی، تسلط به زبان انگلیسی و موفقیت در آزمون‌های زبان مانند TOEFL و IELTS است. ما در اپلای نست خدماتی ارائه می‌دهیم که به شما کمک می‌کند تا مهارت‌های زبانی خود را تقویت کرده و با آمادگی کامل در این آزمون‌ها شرکت کنید. ما با تمرکز بر چهار مهارت اصلی زبان (شنیداری، گفتاری، خواندن و نوشتن) و ارائه راهکارهای اختصاصی برای هر بخش از آزمون، شما را در رسیدن به نمره مطلوب یاری می‌کنیم."
		},
        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "تقویت رزومه اپلای",
			content: "یکی دیگر از خدمات ویژه ما در اپلای نست، ادیت نیتیو مقالات است. اگر شما مقاله‌ای به زبان انگلیسی نوشته‌اید و نیاز به ویرایش دقیق و حرفه‌ای توسط افراد بومی زبان دارید، این سرویس مناسب شماست. تیم ویراستاران ما که از پژوهشگران بومی زبان انگلیسی هستند، مقالات شما را از نظر ساختار، گرامر، واژگان و روان بودن متن بررسی و ویرایش می‌کنند تا مقاله شما به سطح استانداردهای جهانی نزدیک شود. این ادیت نیتیو به شما کمک می‌کند تا مقالات خود را با اطمینان بیشتری به مجلات علمی بین‌المللی ارسال کنید و شانس پذیرش بالاتری داشته باشید.",
		},
        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "ادیت نیتیو مقاله",
			content: "یکی دیگر از خدمات ویژه ما در اپلای نست، ادیت نیتیو مقالات است. اگر شما مقاله‌ای به زبان انگلیسی نوشته‌اید و نیاز به ویرایش دقیق و حرفه‌ای توسط افراد بومی زبان دارید، این سرویس مناسب شماست. تیم ویراستاران ما که از پژوهشگران بومی زبان انگلیسی هستند، مقالات شما را از نظر ساختار، گرامر، واژگان و روان بودن متن بررسی و ویرایش می‌کنند تا مقاله شما به سطح استانداردهای جهانی نزدیک شود. این ادیت نیتیو به شما کمک می‌کند تا مقالات خود را با اطمینان بیشتری به مجلات علمی بین‌المللی ارسال کنید و شانس پذیرش بالاتری داشته باشید.",
		},
        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "سابمیت سریع مقاله",
			content: "در بسیاری از موارد، دانشجویان به دلیل محدودیت زمانی نیاز به ارسال سریع مقاله به مجلات علمی دارند. در اپلای نست، ما خدمات سابمیت سریع و تضمینی مقالات را ارائه می‌دهیم. این خدمات مخصوص دانشجویان کارشناسی ارشد و دکتری است که به دنبال دفاع سریع از پایان‌نامه خود هستند یا قصد شرکت در آزمون‌های دکتری را دارند. با استفاده از این سرویس، مقاله شما در کوتاه‌ترین زمان ممکن به مجلات مورد نظر ارسال می‌شود و شما می‌توانید با خیالی آسوده بر روی مراحل دیگر فرایند اپلای تمرکز کنید.",
		},
        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "مشاوره رایگان",
			content: "ما در اپلای نست، معتقدیم که اولین گام برای موفقیت در هر فرایندی، مشاوره درست و به‌موقع است. به همین دلیل، خدمات مشاوره رایگان را برای تمامی دانشجویان و پژوهشگران عزیز ارائه می‌دهیم. تیم ما از کارشناسان با تجربه آماده است تا به شما در انتخاب بهترین خدمات و مسیرهای ممکن کمک کند. فقط کافیست با ما تماس بگیرید یا از طریق وب‌سایت ما درخواست خود را ارسال کنید. کارشناسان ما به محض دریافت فایل یا درخواست شما، در اسرع وقت با شما تماس خواهند گرفت تا به تمامی سوالات و نیازهای شما پاسخ دهند.",
		},

        {
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/feature2_3.png",
			title: "چرا ما را انتخاب کنید؟",
			content: "تجربه، تخصص و تعهد ما به کیفیت، اپلای نست را به انتخاب اول بسیاری از دانشجویان و پژوهشگران تبدیل کرده است. ما با ارائه خدمات تخصصی و سریع، اطمینان می‌دهیم که در تمامی مراحل از نگارش مقاله تا ارسال و تقویت رزومه، در کنار شما خواهیم بود. هدف ما این است که فرایند اپلای و پذیرش شما را تا حد امکان ساده و کارآمد کنیم. در پایان، اگر به دنبال ارتقای حرفه‌ای و علمی خود هستید و نیاز به راهنمایی و خدمات تخصصی دارید، اپلای نست آماده است تا در این مسیر همراه شما باشد. برای دریافت اطلاعات بیشتر و شروع همکاری، همین حالا با ما تماس بگیرید یا سفارش خود را از طریق وب‌سایت ثبت کنید.",
		},


	];


	return (
		<section className="ezy__epother6 light">
			<Container>
				<Row>
					<Col xs={12}>
						{features.map((feature, index) => (
							<Row className="justify-content-between mt-5" key={index}  dir="rtl">
		       					<Col xs={12} lg={6}>
									<div className="text-center">
										<img src={feature.image} alt="" className="img-fluid" />
									</div>
								</Col>
			   
								<Col xs={12} lg={6}>
									<div className="d-flex flex-column justify-content-center text-center text-lg-end h-100 mt-4 mt-lg-0 me-lg-4" dir="rtl">
										<h2>{feature.title}</h2>
										<p className="mt-2 ms-lg-5">{feature.content}</p>
									</div>
								</Col>
								
							</Row>
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};


export default aboutUs