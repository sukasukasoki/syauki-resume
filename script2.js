    // Get modal element and close button
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Get modal title and description elements
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

    // Get images by their IDs
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");
    var img3 = document.getElementById("image3");
    var img4 = document.getElementById("image4");
    var img5 = document.getElementById("image5");

    // Function to open modal with dynamic content
    function openModal(title, description) {
        modal.style.display = "block";
        modalTitle.textContent = title;
        // Use innerHTML to parse the description as HTML (including bullets or numbering)
        modalDescription.innerHTML = description;
    }

    // Add click event to image1
    img1.onclick = function() {
        // Title and description with HTML formatting (bullets and numbering)
        var title = "ITB Dormitory's Student Cooperation";
        var description = `
            <div class="modalheading">Store Manager & Private Teacher, 2017-2021</div>
            <div class="modaldesc">As a member of the Student's Cooperation with more than 50 members, I was involved in various economics bureau. I was the Store Clerk from 2017 until 2019, and then Promoted to be Store Manager for the whole 2019. I was also did Part-Time as Private Teacher from 2017 until 2021</div>
            <ul class="aligned-list">
                <li>
                    <span class="label">Tools</span>
                    <span>ArcGIS, Microsoft Excel</span>
                </li>
                <li>
                    <span class="label">Workscope</span>
                    <span>People's Management and Relation, Budget Planning, Financial Reporting, Accountability Reporting, Teaching Planning</span>
                </li>
                <li>
                    <span class="label">Client</span>
                    <span>Responsible to all Members of the Cooperation</span>
                </li>
                <li>
                    <span class="label">Deliverable</span>
                    <span>Monthly Financial report, Semesterly Financial Report, Annual Financial & Accountability Report.</span>
                </li>
            </ul>
        `;
        openModal(title, description);
    }

    img2.onclick = function() {
        // Title and description with HTML formatting (bullets and numbering)
        var title = "Bandung Institute of Technology";
        var description = `
            <div class="modalheading">Research Assistant, 2019-2021</div>
            <div class="modaldesc">Assisted the Geodesy Research Group under the Geodesy and Geomatics ASIIN Acredited Study Programe on Landslide Vulnerability Assesment of Garut Regency-Indonesia, and not limited to other Research</div>
            <ul class="aligned-list">
                <li>
                    <span class="label">Tools</span>
                    <span>ArcGIS, Microsoft Excel</span>
                </li>
                <li>
                    <span class="label">Workscope</span>
                    <span>GIS Analyst, Data Analyst, Data Processing, Visual</span>
                </li>
                <li>
                    <span class="label">Client</span>
                    <span>West Java Government, Indonesia</span>
                </li>
                <li>
                    <span class="label">Deliverable</span>
                    <span>Final Thesis, Research Paper</span>
                </li>
            </ul>
        `;
        openModal(title, description);
    }

    img3.onclick = function() {
        // Title and description with HTML formatting (bullets and numbering)
        var title = "Indonesia's Research and Innovation Body";
        var description = `
            <div class="modalheading">Remote Sensing Research Intern, 2019</div>
            <div class="modaldesc">Did temperature analysis research on Mount Anak Krakatau and Mount Agung Volcanoes of Indonesia using Landsat Band 8 Land Surface Temperature (LST) Imagery and utilizing MODVOLC Algorithm to process the data. Also did Oil Spill identification using SENTINEL Radar Imagery and utilizing SNAP Software</div>
            <ul class="aligned-list">
                <li>
                    <span class="label">Tools</span>
                    <span>ArcGIS, SNAP, Microsoft Excel</span>
                </li>
                <li>
                    <span class="label">Workscope</span>
                    <span>GIS Analyst, Data Analyst, Data Processing, Visual Presentation and Interpretation</span>
                </li>
                <li>
                    <span class="label">Client</span>
                    <span>Indonesia's Central Government</span>
                </li>
                <li>
                    <span class="label">Deliverable</span>
                    <span>Research Paper, Visual Presentation</span>
                </li>
            </ul>
        `;
        openModal(title, description);
    }

    img4.onclick = function() {
        // Title and description with HTML formatting (bullets and numbering)
        var title = "Dhanistha Surya Nusantara";
        var description = `
            <div class="modalheading">GIS & UAV Officer, 2021-2022</div>
            <div class="modaldesc">Dhanistha Surya Nusantara (DSN) Is a Palm Plantation company, owning roughly 100.000 Ha of land under 10 Subsidiary Companies, where about 60% of it already planted area. My role there was as a GIS & UAV Officer, Did UAV mapping on all of the Company's Subsidiary Plantation using Fixed Wing UAV and Quadcopter drone using Mission Planner and DJI software, and then process and analyze data based on request (Land Area, Count of Trees, Proposed Bbuilding Location, etc) Using ArcGIS and Microsoft Excel.</div>
            <ul class="aligned-list">
                <li>
                    <span class="label">Software</span>
                    <span>ArcMap, QGIS, Agisoft Metashape, Mission Planner, Global Mapper, Microsoft Excel</span>
                </li>
                <li>
                    <span class="label">Tools</span>
                    <span>Fixed Wing UAV, DJI Phantom Quadcopter Drone</span>
                </li>
                <li>
                    <span class="label">Workscope</span>
                    <span>Photogrammetry, UAV Piloting, GIS Analyst, Data Analyst, Data Processing, Charting, Visual Presentation and Interpretation</span>
                </li>
                <li>
                    <span class="label">Client</span>
                    <span>(Independent Company)</span>
                </li>
                <li>
                    <span class="label">Deliverable</span>
                    <span>Map, Chart, Visual Report</span>
                </li>
            </ul>
        `;
        openModal(title, description);
    }

    img5.onclick = function() {
        // Title and description with HTML formatting (bullets and numbering)
        var title = "Subsea7";
        var description = `
            <div class="modalheading">Associate Offshore Surveyor (2022 - 2025), Offshore Surveyor (2025 - Current Occupation)</div>
            <div class="modaldesc">Subsea7 is a Subsea Construction Company with Global Projects distribution covering Africa, Europe, Asia, Oceania, North America and South America. My role here as an Offshore Surveyor, supporting Construction Vessel, Survey Grade and Working Grade ROV Operation in terms of Surface Navigation, Subsea Positioning & Charting </div>
            <ul class="aligned-list">
                <li>
                    <span class="label">Software</span>
                    <span>EIVA Ecosystem, VisualSoft DVR, Kongsberg APOS, Valeport Datalog, BricsCAD, FUSION2, Microsoft Excel & Word, etc</span>
                </li>
                <li>
                    <span class="label">Tech</span>
                    <span>Kongsberg HiPAP USBL, Sonardyne LBL & SPRINT INS, ixBlue Handheld Gyro, Valeport Midas CTD, R2Sonic dual-head MBES, Norbit MBES, Total Station and Other Survey Measurement Sensors</span>
                </li>
                <li>
                    <span class="label">Projects</span>
                    <span><strong>1. Associate Surveyor at Sangomar Phase 2 Development</strong> - Dakar, Senegal - onboarding Seven Sisters. Client : Woodside <br>
                    <strong>2. Associate Surveyor at Zhong Neng OWF Rock Bag Placing</strong> - Taichung, Taiwan - onboarding Seaway Phoenix. Client : Zhong Neng <br>
                    <strong>3. Surveyor at Scarborough Campaign 2, SURF</strong> - West Australia Offshore - onboarding Seven Oceanic. Client : Woodside <br>
                    </span>
                </li>
            </ul>
        `;
        openModal(title, description);
    }
    // When the user clicks on <span> (close button), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }