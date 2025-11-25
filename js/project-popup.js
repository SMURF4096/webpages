document.addEventListener('DOMContentLoaded', function () {
    const clientLogos = document.querySelectorAll('.client-logo');
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));

    // Project Details Data
    // Can be an Object (Single Project) or Array of Objects (Multiple Projects)
    const projectDetails = {
        "โรงพยาบาลกรุงเทพตราด": [
            {
                name: "Building System Renovation",
                year: "2024",
                location: "Bangkok",
                value: "XX,XXX,XXX THB",
                scope: [
                    "<li><i class='fa fa-check text-success me-2'></i>Electrical System Improvements</li>",
                    "<li><i class='fa fa-check text-success me-2'></i>Communication System Upgrade</li>"
                ],
                description: "โครงการปรับปรุงระบบวิศวกรรมประกอบอาคารเพื่อเพิ่มประสิทธิภาพและความปลอดภัย"
            },
            {
                name: "Plumbing System Improvements",
                year: "2025",
                location: "Bangkok",
                value: "XX,XXX,XXX THB",
                scope: [
                    "<li><i class='fa fa-check text-success me-2'></i>Plumbing System Improvements</li>",
                    "<li><i class='fa fa-check text-success me-2'></i>Sanitary System Maintenance</li>"
                ],
                description: "งานปรับปรุงระบบประปาและสุขาภิบาลเพื่อสุขอนามัยที่ดี"
            }
        ],
        "โรงพยาบาลบางโพ": {
            name: "Electrical & HVAC Renovation",
            year: "2023",
            location: "Bangkok",
            value: "XX,XXX,XXX THB",
            description: "การดำเนินงานติดตั้งและดูแลรักษาระบบวิศวกรรมหลักสำหรับโรงพยาบาลบางโพ มุ่งเน้นความเสถียรของระบบไฟฟ้าและคุณภาพอากาศภายในอาคารเพื่อความปลอดภัยของผู้ป่วย",
            scope: [
                "<li><i class='fa fa-check text-success me-2'></i>Renovation of Electrical Systems</li>",
                "<li><i class='fa fa-check text-success me-2'></i>HVAC System Maintenance</li>"
            ]
        },
        "โรงพยาบาลจุฬาลงกรณ์": {
            name: "Special Building Engineering",
            year: "2023",
            location: "Bangkok",
            value: "XX,XXX,XXX THB",
            description: "โครงการสนับสนุนงานระบบวิศวกรรมสำหรับอาคารพิเศษ โรงพยาบาลจุฬาลงกรณ์ เน้นเทคโนโลยีขั้นสูงและการจัดการพลังงานที่มีประสิทธิภาพ",
            scope: [
                "<li><i class='fa fa-check text-success me-2'></i>Advanced Electrical Installation</li>",
                "<li><i class='fa fa-check text-success me-2'></i>Building Management System (BMS)</li>"
            ]
        },
        "โรงพยาบาลพริ้นซ์ สุวรรณภูมิ": {
            name: "Full MEP Installation",
            year: "2022",
            location: "Samut Prakan",
            value: "XX,XXX,XXX THB",
            description: "งานติดตั้งระบบประกอบอาคารครบวงจรสำหรับโรงพยาบาลพริ้นซ์ สุวรรณภูมิ รองรับมาตรฐาน JCI และการให้บริการระดับสากล",
            scope: [
                "<li><i class='fa fa-check text-success me-2'></i>Full MEP Installation</li>",
                "<li><i class='fa fa-check text-success me-2'></i>Medical Gas System</li>"
            ]
        },
        "โรงพยาบาลรวมใจรักษ์": {
            name: "Energy Saving Engineering",
            year: "2023",
            location: "Bangkok",
            value: "XX,XXX,XXX THB",
            description: "โครงการก่อสร้างและติดตั้งระบบวิศวกรรมสำหรับโรงพยาบาลรวมใจรักษ์ ออกแบบเพื่อการประหยัดพลังงานและการบำรุงรักษาที่ง่ายดาย",
            scope: [
                "<li><i class='fa fa-check text-success me-2'></i>Electrical & Power Backup Systems</li>",
                "<li><i class='fa fa-check text-success me-2'></i>Sanitary Engineering</li>"
            ]
        }
    };

    // Helper to get data
    const getProjectData = (name) => {
        return projectDetails[name] || null;
    };

    // Project Gallery Data (Images)
    const projectGalleries = {
        // --- Hospitals ---
        "โรงพยาบาลกรุงเทพ": [
            "img/projects/hospital/bangkok/01.jpg", "img/projects/hospital/bangkok/02.jpg"
        ],
        "โรงพยาบาลกรุงเทพเชียงใหม่": [
            "img/projects/hospital/bangkokcm/01.jpg", "img/projects/hospital/bangkokcm/02.jpg"
        ],
        "โรงพยาบาลกรุงเทพราชสีมา": [
            "img/projects/hospital/bangkokrcsm/01.jpg", "img/projects/hospital/bangkokrcsm/02.jpg"
        ],
        "โรงพยาบาลกรุงเทพตราด": [
            "img/projects/hospital/bangkoktrad/bangkoktrad_0001.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0002.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0003.jpg",
            "img/projects/hospital/bangkoktrad/bangkoktrad_0004.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0005.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0006.jpg",
            "img/projects/hospital/bangkoktrad/bangkoktrad_0007.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0008.jpg", "img/projects/hospital/bangkoktrad/bangkoktrad_0009.jpg",
            "img/projects/hospital/bangkoktrad/bangkoktrad_0010.jpg"
        ],
        "โรงพยาบาลกรุงเทพระยอง": [
            "img/projects/hospital/bangkokry/01.jpg", "img/projects/hospital/bangkokry/02.jpg"
        ],
        "โรงพยาบาล BNH": [
            "img/projects/hospital/bnh/01.jpg", "img/projects/hospital/bnh/02.jpg"
        ],
        "โรงพยาบาลบางโพ": [
            "img/projects/hospital/bangpooh/bangpoh_0001.jpg", "img/projects/hospital/bangpooh/bangpoh_0002.jpg", "img/projects/hospital/bangpooh/bangpoh_0003.jpg",
            "img/projects/hospital/bangpooh/bangpoh_0004.jpg", "img/projects/hospital/bangpooh/bangpoh_0005.jpg", "img/projects/hospital/bangpooh/bangpoh_0006.jpg",
            "img/projects/hospital/bangpooh/bangpoh_0007.jpg", "img/projects/hospital/bangpooh/bangpoh_0008.jpg", "img/projects/hospital/bangpooh/bangpoh_0009.jpg",
            "img/projects/hospital/bangpooh/bangpoh_0010.jpg"
        ],
        "โรงพยาบาลจุฬาลงกรณ์": [
            "img/projects/hospital/chulah/chulah_0001.jpg", "img/projects/hospital/chulah/chulah_0002.jpg", "img/projects/hospital/chulah/chulah_0003.jpg",
            "img/projects/hospital/chulah/chulah_0004.jpg", "img/projects/hospital/chulah/chulah_0005.jpg", "img/projects/hospital/chulah/chulah_0006.jpg",
            "img/projects/hospital/chulah/chulah_0007.jpg", "img/projects/hospital/chulah/chulah_0008.jpg", "img/projects/hospital/chulah/chulah_0009.jpg",
            "img/projects/hospital/chulah/chulah_0010.jpg"
        ],
        "โรงพยาบาลพระราม 9": [
            "img/projects/hospital/praram9/praram9_0001.jpg", "img/projects/hospital/praram9/praram9_0002.jpg", "img/projects/hospital/praram9/praram9_0003.jpg",
            "img/projects/hospital/praram9/praram9_0004.jpg", "img/projects/hospital/praram9/praram9_0005.jpg", "img/projects/hospital/praram9/praram9_0006.jpg",
            "img/projects/hospital/praram9/praram9_0007.jpg", "img/projects/hospital/praram9/praram9_0008.jpg", "img/projects/hospital/praram9/praram9_0009.jpg",
            "img/projects/hospital/praram9/praram9_0010.jpg"
        ],
        "โรงพยาบาลพริ้นซ์ สุวรรณภูมิ": [
            "img/projects/hospital/princesuvarnabhumi/princesuvan_0001.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0002.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0003.jpg",
            "img/projects/hospital/princesuvarnabhumi/princesuvan_0004.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0005.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0006.jpg",
            "img/projects/hospital/princesuvarnabhumi/princesuvan_0007.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0008.jpg", "img/projects/hospital/princesuvarnabhumi/princesuvan_0009.jpg",
            "img/projects/hospital/princesuvarnabhumi/princesuvan_0010.jpg"
        ],
        "โรงพยาบาลรวมใจรักษ์": [
            "img/projects/hospital/ruamjairak/rjrh_0001.jpg", "img/projects/hospital/ruamjairak/rjrh_0002.jpg", "img/projects/hospital/ruamjairak/rjrh_0003.jpg",
            "img/projects/hospital/ruamjairak/rjrh_0004.jpg", "img/projects/hospital/ruamjairak/rjrh_0005.jpg", "img/projects/hospital/ruamjairak/rjrh_0006.jpg",
            "img/projects/hospital/ruamjairak/rjrh_0007.jpg", "img/projects/hospital/ruamjairak/rjrh_0008.jpg", "img/projects/hospital/ruamjairak/rjrh_0009.jpg",
            "img/projects/hospital/ruamjairak/rjrh_0010.jpg"
        ],
        "โรงพยาบาลศิริราช": [
            "img/projects/hospital/siriraj/siriraj_0001.jpg", "img/projects/hospital/siriraj/siriraj_0002.jpg", "img/projects/hospital/siriraj/siriraj_0003.jpg",
            "img/projects/hospital/siriraj/siriraj_0004.jpg", "img/projects/hospital/siriraj/siriraj_0005.jpg", "img/projects/hospital/siriraj/siriraj_0006.jpg",
            "img/projects/hospital/siriraj/siriraj_0007.jpg", "img/projects/hospital/siriraj/siriraj_0008.jpg", "img/projects/hospital/siriraj/siriraj_0009.jpg",
            "img/projects/hospital/siriraj/siriraj_0010.jpg"
        ],
        "โรงพยาบาลธนบุรีบำรุงเมือง": [
            "img/projects/hospital/thonburibrm/thonburibrm_0001.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0002.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0003.jpg",
            "img/projects/hospital/thonburibrm/thonburibrm_0004.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0005.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0006.jpg",
            "img/projects/hospital/thonburibrm/thonburibrm_0007.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0008.jpg", "img/projects/hospital/thonburibrm/thonburibrm_0009.jpg",
            "img/projects/hospital/thonburibrm/thonburibrm_0010.jpg"
        ],
        "โรงพยาบาลธนบุรี": [
            "img/projects/hospital/thonburi/thonburi_0001.jpg", "img/projects/hospital/thonburi/thonburi_0002.jpg", "img/projects/hospital/thonburi/thonburi_0003.jpg",
            "img/projects/hospital/thonburi/thonburi_0004.jpg", "img/projects/hospital/thonburi/thonburi_0005.jpg", "img/projects/hospital/thonburi/thonburi_0006.jpg",
            "img/projects/hospital/thonburi/thonburi_0007.jpg", "img/projects/hospital/thonburi/thonburi_0008.jpg", "img/projects/hospital/thonburi/thonburi_0009.jpg",
            "img/projects/hospital/thonburi/thonburi_0010.jpg"
        ],

        // --- Banks ---
        "ธนาคารกรุงศรีอยุธยา": [
            "img/projects/bank/krungsri/krungsri_0001.jpg", "img/projects/bank/krungsri/krungsri_0002.jpg", "img/projects/bank/krungsri/krungsri_0003.jpg",
            "img/projects/bank/krungsri/krungsri_0004.jpg", "img/projects/bank/krungsri/krungsri_0005.jpg", "img/projects/bank/krungsri/krungsri_0006.jpg",
            "img/projects/bank/krungsri/krungsri_0007.jpg", "img/projects/bank/krungsri/krungsri_0008.jpg", "img/projects/bank/krungsri/krungsri_0009.jpg",
            "img/projects/bank/krungsri/krungsri_0010.jpg"
        ],

        // --- Condos ---
        "บ้านบรรณวรรณ คอนโดมิเนียม": [
            "img/projects/condo_hotel/bannbannawan/bannbannawan_0001.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0002.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0003.jpg",
            "img/projects/condo_hotel/baanbannawan/baanbannawan_0004.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0005.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0006.jpg",
            "img/projects/condo_hotel/baanbannawan/baanbannawan_0007.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0008.jpg", "img/projects/condo_hotel/baanbannawan/baanbannawan_0009.jpg",
            "img/projects/condo_hotel/baanbannawan/baanbannawan_0010.jpg"
        ],
        "Oakwood Residence": [
            "img/projects/condo_hotel/oakwood/oakwood_0001.jpg", "img/projects/condo_hotel/oakwood/oakwood_0002.jpg", "img/projects/condo_hotel/oakwood/oakwood_0003.jpg",
            "img/projects/condo_hotel/oakwood/oakwood_0004.jpg", "img/projects/condo_hotel/oakwood/oakwood_0005.jpg", "img/projects/condo_hotel/oakwood/oakwood_0006.jpg",
            "img/projects/condo_hotel/oakwood/oakwood_0007.jpg", "img/projects/condo_hotel/oakwood/oakwood_0008.jpg", "img/projects/condo_hotel/oakwood/oakwood_0009.jpg",
            "img/projects/condo_hotel/oakwood/oakwood_0010.jpg"
        ],
        "Trapezo Condominium": [
            "img/projects/condo/trapezo/trapezo_0001.jpg", "img/projects/condo/trapezo/trapezo_0002.jpg", "img/projects/condo/trapezo/trapezo_0003.jpg",
            "img/projects/condo/trapezo/trapezo_0004.jpg", "img/projects/condo/trapezo/trapezo_0005.jpg", "img/projects/condo/trapezo/trapezo_0006.jpg",
            "img/projects/condo/trapezo/trapezo_0007.jpg", "img/projects/condo/trapezo/trapezo_0008.jpg", "img/projects/condo/trapezo/trapezo_0009.jpg",
            "img/projects/condo/trapezo/trapezo_0010.jpg"
        ],

        // --- Hotels & Residents ---
        "Best Western Hotel": [
            "img/projects/resident/bestwestern/bestwestern_0001.jpg", "img/projects/resident/bestwestern/bestwestern_0002.jpg", "img/projects/resident/bestwestern/bestwestern_0003.jpg",
            "img/projects/resident/bestwestern/bestwestern_0004.jpg", "img/projects/resident/bestwestern/bestwestern_0005.jpg", "img/projects/resident/bestwestern/bestwestern_0006.jpg",
            "img/projects/resident/bestwestern/bestwestern_0007.jpg", "img/projects/resident/bestwestern/bestwestern_0008.jpg", "img/projects/resident/bestwestern/bestwestern_0009.jpg",
            "img/projects/resident/bestwestern/bestwestern_0010.jpg"
        ],
        "Best Western Plus Hotel": [
            "img/projects/resident/bestwesternplus/bestwesternplus_0001.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0002.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0003.jpg",
            "img/projects/resident/bestwesternplus/bestwesternplus_0004.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0005.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0006.jpg",
            "img/projects/resident/bestwesternplus/bestwesternplus_0007.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0008.jpg", "img/projects/resident/bestwesternplus/bestwesternplus_0009.jpg",
            "img/projects/resident/bestwesternplus/bestwesternplus_0010.jpg"
        ],
        "Marriott Hotel": [
            "img/projects/resident/marriott/marriott_0001.jpg", "img/projects/resident/marriott/marriott_0002.jpg", "img/projects/resident/marriott/marriott_0003.jpg",
            "img/projects/resident/marriott/marriott_0004.jpg", "img/projects/resident/marriott/marriott_0005.jpg", "img/projects/resident/marriott/marriott_0006.jpg",
            "img/projects/resident/marriott/marriott_0007.jpg", "img/projects/resident/marriott/marriott_0008.jpg", "img/projects/resident/marriott/marriott_0009.jpg",
            "img/projects/resident/marriott/marriott_0010.jpg"
        ],
        "Bangna Pride Residence": [
            "img/projects/resident/bangnapride/bangnapride_0001.jpg", "img/projects/resident/bangnapride/bangnapride_0002.jpg", "img/projects/resident/bangnapride/bangnapride_0003.jpg",
            "img/projects/resident/bangnapride/bangnapride_0004.jpg", "img/projects/resident/bangnapride/bangnapride_0005.jpg", "img/projects/resident/bangnapride/bangnapride_0006.jpg",
            "img/projects/resident/bangnapride/bangnapride_0007.jpg", "img/projects/resident/bangnapride/bangnapride_0008.jpg", "img/projects/resident/bangnapride/bangnapride_0009.jpg",
            "img/projects/resident/bangnapride/bangnapride_0010.jpg"
        ],
        "RPM Residence": [
            "img/projects/resident/rpm/rpm_0001.jpg", "img/projects/resident/rpm/rpm_0002.jpg", "img/projects/resident/rpm/rpm_0003.jpg",
            "img/projects/resident/rpm/rpm_0004.jpg", "img/projects/resident/rpm/rpm_0005.jpg", "img/projects/resident/rpm/rpm_0006.jpg",
            "img/projects/resident/rpm/rpm_0007.jpg", "img/projects/resident/rpm/rpm_0008.jpg", "img/projects/resident/rpm/rpm_0009.jpg",
            "img/projects/resident/rpm/rpm_0010.jpg"
        ],
        "Woodland Resort": [
            "img/projects/resident/woodland/woodland_0001.jpg", "img/projects/resident/woodland/woodland_0002.jpg", "img/projects/resident/woodland/woodland_0003.jpg",
            "img/projects/resident/woodland/woodland_0004.jpg", "img/projects/resident/woodland/woodland_0005.jpg", "img/projects/resident/woodland/woodland_0006.jpg",
            "img/projects/resident/woodland/woodland_0007.jpg", "img/projects/resident/woodland/woodland_0008.jpg", "img/projects/resident/woodland/woodland_0009.jpg",
            "img/projects/resident/woodland/woodland_0010.jpg"
        ],

        // --- Entertainment ---
        "Tiffany's Show Pattaya": [
            "img/projects/entertainment/tiffany/tiffany_0001.jpg", "img/projects/entertainment/tiffany/tiffany_0002.jpg", "img/projects/entertainment/tiffany/tiffany_0003.jpg",
            "img/projects/entertainment/tiffany/tiffany_0004.jpg", "img/projects/entertainment/tiffany/tiffany_0005.jpg", "img/projects/entertainment/tiffany/tiffany_0006.jpg",
            "img/projects/entertainment/tiffany/tiffany_0007.jpg", "img/projects/entertainment/tiffany/tiffany_0008.jpg", "img/projects/entertainment/tiffany/tiffany_0009.jpg",
            "img/projects/entertainment/tiffany/tiffany_0010.jpg"
        ],

        // --- Food ---
        "Dutch Mill": [
            "img/projects/food/dutchmill/dutchmill_0001.jpg", "img/projects/food/dutchmill/dutchmill_0002.jpg", "img/projects/food/dutchmill/dutchmill_0003.jpg",
            "img/projects/food/dutchmill/dutchmill_0004.jpg", "img/projects/food/dutchmill/dutchmill_0005.jpg", "img/projects/food/dutchmill/dutchmill_0006.jpg",
            "img/projects/food/dutchmill/dutchmill_0007.jpg", "img/projects/food/dutchmill/dutchmill_0008.jpg", "img/projects/food/dutchmill/dutchmill_0009.jpg",
            "img/projects/food/dutchmill/dutchmill_0010.jpg"
        ],
        "Saha Farms": [
            "img/projects/food/sahafarm/sahafarm_0001.jpg", "img/projects/food/sahafarm/sahafarm_0002.jpg", "img/projects/food/sahafarm/sahafarm_0003.jpg",
            "img/projects/food/sahafarm/sahafarm_0004.jpg", "img/projects/food/sahafarm/sahafarm_0005.jpg", "img/projects/food/sahafarm/sahafarm_0006.jpg",
            "img/projects/food/sahafarm/sahafarm_0007.jpg", "img/projects/food/sahafarm/sahafarm_0008.jpg", "img/projects/food/sahafarm/sahafarm_0009.jpg",
            "img/projects/food/sahafarm/sahafarm_0010.jpg"
        ],
        "Thai Marche Restaurant": [
            "img/projects/food/thaimarche/thaimarche_0001.jpg", "img/projects/food/thaimarche/thaimarche_0002.jpg", "img/projects/food/thaimarche/thaimarche_0003.jpg",
            "img/projects/food/thaimarche/thaimarche_0004.jpg", "img/projects/food/thaimarche/thaimarche_0005.jpg", "img/projects/food/thaimarche/thaimarche_0006.jpg",
            "img/projects/food/thaimarche/thaimarche_0007.jpg", "img/projects/food/thaimarche/thaimarche_0008.jpg", "img/projects/food/thaimarche/thaimarche_0009.jpg",
            "img/projects/food/thaimarche/thaimarche_0010.jpg"
        ],

        // --- Museum & Art ---
        "Museum of Contemporary Art": [
            "img/projects/museum/moca/moca_0001.jpg", "img/projects/museum/moca/moca_0002.jpg", "img/projects/museum/moca/moca_0003.jpg",
            "img/projects/museum/moca/moca_0004.jpg", "img/projects/museum/moca/moca_0005.jpg", "img/projects/museum/moca/moca_0006.jpg",
            "img/projects/museum/moca/moca_0007.jpg", "img/projects/museum/moca/moca_0008.jpg", "img/projects/museum/moca/moca_0009.jpg",
            "img/projects/museum/moca/moca_0010.jpg"
        ],
        "บ้านสุขาขาวดี": [
            "img/projects/museum/baansukaowadee/baansukaowadee_0001.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0002.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0003.jpg",
            "img/projects/museum/baansukaowadee/baansukaowadee_0004.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0005.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0006.jpg",
            "img/projects/museum/baansukaowadee/baansukaowadee_0007.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0008.jpg", "img/projects/museum/baansukaowadee/baansukaowadee_0009.jpg",
            "img/projects/museum/baansukaowadee/baansukaowadee_0010.jpg"
        ],
        "Konitz": [
            "img/projects/art/konitz/konitz_0001.jpg", "img/projects/art/konitz/konitz_0002.jpg", "img/projects/art/konitz/konitz_0003.jpg",
            "img/projects/art/konitz/konitz_0004.jpg", "img/projects/art/konitz/konitz_0005.jpg", "img/projects/art/konitz/konitz_0006.jpg",
            "img/projects/art/konitz/konitz_0007.jpg", "img/projects/art/konitz/konitz_0008.jpg", "img/projects/art/konitz/konitz_0009.jpg",
            "img/projects/art/konitz/konitz_0010.jpg"
        ],

        // --- Royal ---
        "พระที่นั่งอนันตสมาคม": [
            "img/projects/royal/anantasamakhom/anantasamakhom_0001.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0002.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0003.jpg",
            "img/projects/royal/anantasamakhom/anantasamakhom_0004.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0005.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0006.jpg",
            "img/projects/royal/anantasamakhom/anantasamakhom_0007.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0008.jpg", "img/projects/royal/anantasamakhom/anantasamakhom_0009.jpg",
            "img/projects/royal/anantasamakhom/anantasamakhom_0010.jpg"
        ],

        // --- Education ---
        "โรงเรียนพระหฤทัย": [
            "img/projects/school/phraharuthai/phraharuthai_0001.jpg", "img/projects/school/phraharuthai/phraharuthai_0002.jpg", "img/projects/school/phraharuthai/phraharuthai_0003.jpg",
            "img/projects/school/phraharuthai/phraharuthai_0004.jpg", "img/projects/school/phraharuthai/phraharuthai_0005.jpg", "img/projects/school/phraharuthai/phraharuthai_0006.jpg",
            "img/projects/school/phraharuthai/phraharuthai_0007.jpg", "img/projects/school/phraharuthai/phraharuthai_0008.jpg", "img/projects/school/phraharuthai/phraharuthai_0009.jpg",
            "img/projects/school/phraharuthai/phraharuthai_0010.jpg"
        ],
        "โรงเรียนพระราม": [
            "img/projects/school/rama/rama_0001.jpg", "img/projects/school/rama/rama_0002.jpg", "img/projects/school/rama/rama_0003.jpg",
            "img/projects/school/rama/rama_0004.jpg", "img/projects/school/rama/rama_0005.jpg", "img/projects/school/rama/rama_0006.jpg",
            "img/projects/school/rama/rama_0007.jpg", "img/projects/school/rama/rama_0008.jpg", "img/projects/school/rama/rama_0009.jpg",
            "img/projects/school/rama/rama_0010.jpg"
        ],

        // --- Technology & Industry ---
        "EnerQ - พลังงานสะอาด": [
            "img/projects/tech/enerq/enerq_0001.jpg", "img/projects/tech/enerq/enerq_0002.jpg", "img/projects/tech/enerq/enerq_0003.jpg",
            "img/projects/tech/enerq/enerq_0004.jpg", "img/projects/tech/enerq/enerq_0005.jpg", "img/projects/tech/enerq/enerq_0006.jpg",
            "img/projects/tech/enerq/enerq_0007.jpg", "img/projects/tech/enerq/enerq_0008.jpg", "img/projects/tech/enerq/enerq_0009.jpg",
            "img/projects/tech/enerq/enerq_0010.jpg"
        ],
        "Pfizer Pharmaceutical": [
            "img/projects/tech/pfizer/pfizer_0001.jpg", "img/projects/tech/pfizer/pfizer_0002.jpg", "img/projects/tech/pfizer/pfizer_0003.jpg",
            "img/projects/tech/pfizer/pfizer_0004.jpg", "img/projects/tech/pfizer/pfizer_0005.jpg", "img/projects/tech/pfizer/pfizer_0006.jpg",
            "img/projects/tech/pfizer/pfizer_0007.jpg", "img/projects/tech/pfizer/pfizer_0008.jpg", "img/projects/tech/pfizer/pfizer_0009.jpg",
            "img/projects/tech/pfizer/pfizer_0010.jpg"
        ],
        "Ansell": [
            "img/projects/tech/ansell/ansell_0001.jpg", "img/projects/tech/ansell/ansell_0002.jpg", "img/projects/tech/ansell/ansell_0003.jpg",
            "img/projects/tech/ansell/ansell_0004.jpg", "img/projects/tech/ansell/ansell_0005.jpg", "img/projects/tech/ansell/ansell_0006.jpg",
            "img/projects/tech/ansell/ansell_0007.jpg", "img/projects/tech/ansell/ansell_0008.jpg", "img/projects/tech/ansell/ansell_0009.jpg",
            "img/projects/tech/ansell/ansell_0010.jpg"
        ],
        "Thai Hospital Service": [
            "img/projects/tech/ths/ths_0001.jpg", "img/projects/tech/ths/ths_0002.jpg", "img/projects/tech/ths/ths_0003.jpg",
            "img/projects/tech/ths/ths_0004.jpg", "img/projects/tech/ths/ths_0005.jpg", "img/projects/tech/ths/ths_0006.jpg",
            "img/projects/tech/ths/ths_0007.jpg", "img/projects/tech/ths/ths_0008.jpg", "img/projects/tech/ths/ths_0009.jpg",
            "img/projects/tech/ths/ths_0010.jpg"
        ],
        "TOT โทรคมนาคม": [
            "img/projects/technology/TOT/tot_0001.jpg", "img/projects/technology/TOT/tot_0002.jpg", "img/projects/technology/TOT/tot_0003.jpg",
            "img/projects/technology/TOT/tot_0004.jpg", "img/projects/technology/TOT/tot_0005.jpg", "img/projects/technology/TOT/tot_0006.jpg",
            "img/projects/technology/TOT/tot_0007.jpg", "img/projects/technology/TOT/tot_0008.jpg", "img/projects/technology/TOT/tot_0009.jpg",
            "img/projects/technology/TOT/tot_0010.jpg"
        ],
        "Telecom Asia": [
            "img/projects/tech/telecomasia/telecomasia_0001.jpg", "img/projects/tech/telecomasia/telecomasia_0002.jpg", "img/projects/tech/telecomasia/telecomasia_0003.jpg",
            "img/projects/tech/telecomasia/telecomasia_0004.jpg", "img/projects/tech/telecomasia/telecomasia_0005.jpg", "img/projects/tech/telecomasia/telecomasia_0006.jpg",
            "img/projects/tech/telecomasia/telecomasia_0007.jpg", "img/projects/tech/telecomasia/telecomasia_0008.jpg", "img/projects/tech/telecomasia/telecomasia_0009.jpg",
            "img/projects/tech/telecomasia/telecomasia_0010.jpg"
        ],
        "Esso": [
            "img/projects/energy/esso/esso_0001.jpg", "img/projects/energy/esso/esso_0002.jpg", "img/projects/energy/esso/esso_0003.jpg",
            "img/projects/energy/esso/esso_0004.jpg", "img/projects/energy/esso/esso_0005.jpg", "img/projects/energy/esso/esso_0006.jpg",
            "img/projects/energy/esso/esso_0007.jpg", "img/projects/energy/esso/esso_0008.jpg", "img/projects/energy/esso/esso_0009.jpg",
            "img/projects/energy/esso/esso_0010.jpg"
        ],
        "Shell": [
            "img/projects/energy/shell/shell_0001.jpg", "img/projects/energy/shell/shell_0002.jpg", "img/projects/energy/shell/shell_0003.jpg",
            "img/projects/energy/shell/shell_0004.jpg", "img/projects/energy/shell/shell_0005.jpg", "img/projects/energy/shell/shell_0006.jpg",
            "img/projects/energy/shell/shell_0007.jpg", "img/projects/energy/shell/shell_0008.jpg", "img/projects/energy/shell/shell_0009.jpg",
            "img/projects/energy/shell/shell_0010.jpg"
        ],
        "Caltex": [
            "img/projects/energy/caltex/caltex_0001.jpg", "img/projects/energy/caltex/caltex_0002.jpg", "img/projects/energy/caltex/caltex_0003.jpg",
            "img/projects/energy/caltex/caltex_0004.jpg", "img/projects/energy/caltex/caltex_0005.jpg", "img/projects/energy/caltex/caltex_0006.jpg",
            "img/projects/energy/caltex/caltex_0007.jpg", "img/projects/energy/caltex/caltex_0008.jpg", "img/projects/energy/caltex/caltex_0009.jpg",
            "img/projects/energy/caltex/caltex_0010.jpg"
        ]
    };

    clientLogos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.style.transition = 'transform 0.3s ease';

        logo.addEventListener('mouseenter', function () { this.style.transform = 'scale(1.1)'; });
        logo.addEventListener('mouseleave', function () { this.style.transform = 'scale(1)'; });

        logo.addEventListener('click', function () {
            const clientName = this.getAttribute('alt');
            const imgSrc = this.getAttribute('src');
            const rawData = getProjectData(clientName);
            const galleryImages = projectGalleries[clientName];

            // Target Elements
            const logoContainer = document.getElementById('modalLogoContainer');
            const titleElem = document.getElementById('modalProjectTitle');
            const contentBody = document.getElementById('modalContentBody');
            const carouselInner = document.getElementById('modalCarouselInner');

            // 1. Set Logo
            logoContainer.innerHTML = '';
            const logoImg = document.createElement('img');
            logoImg.src = imgSrc;
            logoImg.alt = clientName;
            logoImg.className = 'img-fluid';
            logoContainer.appendChild(logoImg);

            // 2. Set Title (Client Name)
            titleElem.textContent = clientName;

            // 3. Render Content (Handle Single vs Multiple Projects)
            contentBody.innerHTML = ''; // Clear previous content

            let projects = [];
            if (Array.isArray(rawData)) {
                projects = rawData;
            } else if (rawData) {
                projects = [rawData];
            } else {
                // Default fallback
                projects = [{
                    name: "Project Details",
                    year: "2024",
                    location: "Thailand",
                    value: "Confidential",
                    scope: ["<li><i class='fa fa-check text-success me-2'></i>General Engineering Services</li>"],
                    description: "ให้บริการออกแบบและติดตั้งระบบวิศวกรรมประกอบอาคารครบวงจร"
                }];
            }

            projects.forEach((proj, index) => {
                // Create Project Card
                const card = document.createElement('div');
                card.className = 'mb-5 border-bottom pb-4';
                if (index === projects.length - 1) card.className = 'mb-0'; // Remove border for last item

                const scopeHtml = Array.isArray(proj.scope) ? proj.scope.join('') : proj.scope;

                card.innerHTML = `
                    <h4 class="fw-bold text-dark mb-3">${proj.name}</h4>
                    
                    <!-- Bento Grid -->
                    <div class="row g-3 mb-4">
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-3 h-100">
                                <small class="text-muted text-uppercase d-block mb-1" style="font-size: 0.7rem;">Year</small>
                                <span class="fw-bold text-dark">${proj.year || '-'}</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-3 h-100">
                                <small class="text-muted text-uppercase d-block mb-1" style="font-size: 0.7rem;">Location</small>
                                <span class="fw-bold text-dark">${proj.location || 'Thailand'}</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-light rounded-3 h-100">
                                <small class="text-muted text-uppercase d-block mb-1" style="font-size: 0.7rem;">Value</small>
                                <span class="fw-bold text-primary">${proj.value || 'Confidential'}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="mb-3">
                        <h6 class="fw-bold text-dark mb-2">Scope of Work</h6>
                        <ul class="list-unstyled text-muted small mb-3">
                            ${scopeHtml}
                        </ul>
                        <p class="text-muted small">${proj.description || ''}</p>
                    </div>
                `;
                contentBody.appendChild(card);
            });

            // 4. Populate Carousel
            carouselInner.innerHTML = '';
            let imagesToShow = (galleryImages && galleryImages.length > 0) ? galleryImages : [imgSrc];

            imagesToShow.forEach((img, index) => {
                const item = document.createElement('div');
                item.className = `carousel-item h-100 ${index === 0 ? 'active' : ''}`;

                const bgSize = (imagesToShow.length === 1 && imagesToShow[0] === imgSrc) ? 'contain' : 'cover';

                item.style.backgroundImage = `url('${img}')`;
                item.style.backgroundSize = bgSize;
                item.style.backgroundPosition = 'center';
                item.style.backgroundRepeat = 'no-repeat';
                item.style.height = '100%';
                item.style.minHeight = '600px';
                item.style.backgroundColor = '#000';

                carouselInner.appendChild(item);
            });

            modal.show();
        });
    });
});
