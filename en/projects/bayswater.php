<?php
$servername = "64.207.177.102";
$username = "usr_google";
$password = "Kd%x761x";
// $username = "root";
// $password = "";
$databese = 'google';
// Create connection
$conn = new mysqli($servername, $username, $password, $databese);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM business_category";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html class="has-no-js" lang="en" data-template="contact" data-theme="dark"  data-pageColor="default">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<base >
	<meta name="keywords" content="Case studies, pwa and wordpress developer, custom web application, award winning web design services in Mumbai, msme & b2b digital marketing solutions, web app developer near you, bespoke web apps">
	<link rel="canonical" href="https://ibridgedigital.com/bayswater">
	<title>Works & Portfolio | iBridge Digital</title>
	
	<link rel="alternate" hreflang="fr" href="../../fr/projets/design-canada.html">
	
	<meta name="description" content="Our expertise showcased in proven case studies of our clients. Providing world-class web development & digital marketing services in India. Get a Quote.">
	
	<meta property="og:type"        content="website">
	<meta property="og:url"         content="design-canada.html">
	<meta property="og:site_name"   content="iBridge Digital">
	<meta property="og:title"       content="Design Canada">
	<meta property="og:image"       content="../../uploads/projects/Bayswater/img_1920x1260_design_canada.jpg">
	<meta property="og:description" content="To make this project a reality, iBridge Digital collaborated closely with Design Canada. Our team offered strategies for creating a complimentary online experience up to the high standards of the Design Canada documentary.">
	
	
	<meta property="twitter:card"        content="summary">
	<meta property="twitter:url"         content="design-canada.html">
	<meta property="twitter:title"       content="Design Canada">
	<meta property="twitter:image"       content="../../uploads/projects/Bayswater/img_1920x1260_design_canada.jpg">
	<meta property="twitter:description" content="To make this project a reality, iBridge Digital collaborated closely with Design Canada. Our team offered strategies for creating a complimentary online experience up to the high standards of the Design Canada documentary.">

	<!-- DNS Prefetching -->
	<link rel="dns-prefetch" href="http://cdnjs.cloudflare.com/" />
	<link rel="dns-prefetch" href="http://www.google.com/" />
	<link rel="dns-prefetch" href="http://www.google-analytics.com/" />
	<link rel="dns-prefetch" href="http://www.gstatic.com/" />

	<!-- Viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">

	<meta name="HandheldFriendly" content="true">


	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
	
	<!-- Appearance -->
	<meta name="theme-color" content="#4D84F1">

	<link rel="apple-touch-icon" sizes="57x57" href="../../assets/images/favicons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="../../assets/images/favicons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="../../assets/images/favicons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="../../assets/images/favicons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="../../assets/images/favicons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="../../assets/images/favicons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="../../assets/images/favicons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="../../assets/images/favicons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="../../assets/images/favicons/apple-touch-icon-180x180.png">

	<link rel="icon" type="image/png" href="../../assets/images/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="../../assets/images/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="../../assets/images/favicons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="../../assets/images/favicons/android-chrome-192x192.png" sizes="192x192">

	<link rel="manifest" href="../../manifest.json">
	<link rel="mask-icon" href="../../assets/images/favicons/safari-pinned-tab.svg" color="#4D84F1">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="../../assets/styles/newstyle.css">
	<link rel="stylesheet" type="text/css" href="../../assets/styles/steps.css">

	<meta name="msapplication-TileColor" content="#4D84F1">
	<meta name="msapplication-TileImage" content="../../assets/images/favicons/mstile-144x144.png">

	<!-- Styles -->
	<style media="all">

		/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{margin:.67em 0;font-size:2em}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{overflow:visible;box-sizing:content-box;height:0}pre{font-size:1em;font-family:monospace,monospace}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-size:1em;font-family:monospace,monospace}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{margin:0;font-size:100%;font-family:sans-serif;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;border-radius:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{margin:0 2px;padding:.35em .625em .75em;border:1px solid silver}legend{display:table;box-sizing:border-box;padding:0;max-width:100%;color:inherit;white-space:normal}progress{display:inline-block;vertical-align:baseline}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{box-sizing:border-box}[hidden],template{display:none}*,:after,:before{box-sizing:inherit}address{font-style:inherit}cite,dfn,em,i{font-style:italic}b,strong{font-weight:700}a{text-decoration:none}a svg{pointer-events:none}[tabindex],a,area,button,input,label,select,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hreflang]&gt;abbr[title]{text-decoration:none}table{border-spacing:0;border-collapse:collapse}hr{display:block;margin:1em 0;padding:0;height:1px;border:0;border-top:1px solid #ccc}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio:not([controls]){display:none;height:0}img,svg{max-width:100%;height:auto}img[height],img[width],svg[height],svg[width]{max-width:none}img{font-style:italic}svg{fill:currentColor}input,select,textarea{display:block;margin:0;padding:0;width:100%;outline:0;border:0;border-radius:0;background:none transparent;color:inherit;font:inherit;line-height:normal;-webkit-appearance:none;-moz-appearance:none;appearance:none}select{text-transform:none}select::-ms-expand{display:none}select::-ms-value{background:none;color:inherit}textarea{overflow:auto;resize:vertical}.o-button,button{display:inline-block;overflow:visible;margin:0;padding:0;outline:0;border:0;background:none transparent;color:inherit;vertical-align:middle;text-align:center;text-transform:none;font:inherit;line-height:normal;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.o-button,.o-button:focus,.o-button:hover,button,button:focus,button:hover{text-decoration:none}@font-face{font-family:Haas;src:url(../../fonts/haasgrotdisp-55roman.html) format(&quot;woff2&quot;),url(../../fonts/haasgrotdisp-55roman-2.html) format(&quot;woff&quot;);font-style:normal;font-weight:400}@font-face{font-family:Haas;src:url(../../fonts/haasgrotdisp-45light.html) format(&quot;woff2&quot;),url(../../fonts/haasgrotdisp-45light-2.html) format(&quot;woff&quot;);font-style:normal;font-weight:300}@font-face{font-family:Haas;src:url(../../fonts/haasgrotdisp-56italic.html) format(&quot;woff2&quot;),url(../../fonts/haasgrotdisp-56italic-2.html) format(&quot;woff&quot;);font-style:italic;font-weight:400}html{color:#1e1f21;font-family:Haas,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:none}@media (max-width:699px){html{font-size:15px}}@media (min-width:700px) and (max-width:1024px){html{font-size:13px}}@media (min-width:1025px) and (max-width:1199px){html{font-size:13px}}@media (min-width:1200px) and (max-width:1399px){html{font-size:14px}}@media (min-width:1400px) and (max-width:1599px){html{font-size:15px}}@media (min-width:1600px) and (max-width:1999px){html{font-size:17px}}@media (min-width:2000px) and (max-width:2399px){html{font-size:19px}}@media (min-width:2400px){html{font-size:21px}}html.has-dom-loading,html.has-smooth-scroll{height:100%;overflow:hidden}html.has-dom-loading{cursor:wait}html[data-theme=light]{background-color:#fff}html[data-theme=dark]{background-color:#1c1c20;color:#fff}::-webkit-scrollbar{width:0!important}.o-scroll,body{height:100%}.has-smooth-scroll.has-dom-loading .o-scroll,.has-smooth-scroll.has-dom-loading body{overflow:hidden}.has-dom-loaded body,.has-dom-loading body{opacity:1!important}@media (max-width:1599px){.o-scroll{padding-right:7.6rem}}@media (min-width:1600px){.o-scroll{padding-right:8.88889rem}}[data-template=play] .o-scroll{padding-right:0}@media (max-width:1024px){.o-scroll{padding-right:0}}::selection{background-color:#4d84f1;color:#fff;text-shadow:none}a{color:#1a0dab}a:focus,a:hover{color:#13097c}figure,p{margin:0}.dg.ac{z-index:10000!important}[data-template=home] main{height:100%}.o-h,.o-h1,.o-h2,.o-h3,.o-h4,.o-h5,.o-h6,h1,h2,h3,h4,h5,h6{font-weight:400;margin-top:0;line-height:1.6}.-noMargin.o-h1,.-noMargin.o-h2,.-noMargin.o-h3,.-noMargin.o-h4,.-noMargin.o-h5,.-noMargin.o-h6,.o-h.-noMargin,h1.-noMargin,h2.-noMargin,h3.-noMargin,h4.-noMargin,h5.-noMargin,h6.-noMargin{margin-bottom:0}.-indent.o-h1,.-indent.o-h2,.-indent.o-h3,.-indent.o-h4,.-indent.o-h5,.-indent.o-h6,.-normal.o-h1,.-normal.o-h2,.-normal.o-h3,.-normal.o-h4,.-normal.o-h5,.-normal.o-h6,.o-h.-indent,.o-h.-normal,h1.-indent,h1.-normal,h2.-indent,h2.-normal,h3.-indent,h3.-normal,h4.-indent,h4.-normal,h5.-indent,h5.-normal,h6.-indent,h6.-normal{font-size:1rem;margin-bottom:0}.-indent.o-h1,.-indent.o-h2,.-indent.o-h3,.-indent.o-h4,.-indent.o-h5,.-indent.o-h6,.o-h.-indent,h1.-indent,h2.-indent,h3.-indent,h4.-indent,h5.-indent,h6.-indent{display:inline-block}@media (max-width:699px){.-indent.o-h1,.-indent.o-h2,.-indent.o-h3,.-indent.o-h4,.-indent.o-h5,.-indent.o-h6,.o-h.-indent,h1.-indent,h2.-indent,h3.-indent,h4.-indent,h5.-indent,h6.-indent{width:100px}}@media (min-width:700px) and (max-width:1599px){.-indent.o-h1,.-indent.o-h2,.-indent.o-h3,.-indent.o-h4,.-indent.o-h5,.-indent.o-h6,.o-h.-indent,h1.-indent,h2.-indent,h3.-indent,h4.-indent,h5.-indent,h6.-indent{width:11.2rem}}@media (min-width:1600px){.-indent.o-h1,.-indent.o-h2,.-indent.o-h3,.-indent.o-h4,.-indent.o-h5,.-indent.o-h6,.o-h.-indent,h1.-indent,h2.-indent,h3.-indent,h4.-indent,h5.-indent,h6.-indent{width:11.85185rem}}.-indent.-top.o-h1,.-indent.-top.o-h2,.-indent.-top.o-h3,.-indent.-top.o-h4,.-indent.-top.o-h5,.-indent.-top.o-h6,.o-h.-indent.-top,h1.-indent.-top,h2.-indent.-top,h3.-indent.-top,h4.-indent.-top,h5.-indent.-top,h6.-indent.-top{vertical-align:top}.-inline.o-h1,.-inline.o-h2,.-inline.o-h3,.-inline.o-h4,.-inline.o-h5,.-inline.o-h6,.o-h.-inline,h1.-inline,h2.-inline,h3.-inline,h4.-inline,h5.-inline,h6.-inline{display:inline}.-inline-block.o-h1,.-inline-block.o-h2,.-inline-block.o-h3,.-inline-block.o-h4,.-inline-block.o-h5,.-inline-block.o-h6,.o-h.-inline-block,h1.-inline-block,h2.-inline-block,h3.-inline-block,h4.-inline-block,h5.-inline-block,h6.-inline-block{display:inline-block}.-uppercase.o-h1,.-uppercase.o-h2,.-uppercase.o-h3,.-uppercase.o-h4,.-uppercase.o-h5,.-uppercase.o-h6,.o-h.-uppercase,h1.-uppercase,h2.-uppercase,h3.-uppercase,h4.-uppercase,h5.-uppercase,h6.-uppercase{text-transform:uppercase}@media (min-width:700px){.-margin-small.o-h1,.-margin-small.o-h2,.-margin-small.o-h3,.-margin-small.o-h4,.-margin-small.o-h5,.-margin-small.o-h6,.o-h.-margin-small,h1.-margin-small,h2.-margin-small,h3.-margin-small,h4.-margin-small,h5.-margin-small,h6.-margin-small{margin-bottom:1.33333rem}}@media (max-width:699px){.-margin-small.o-h1,.-margin-small.o-h2,.-margin-small.o-h3,.-margin-small.o-h4,.-margin-small.o-h5,.-margin-small.o-h6,.o-h.-margin-small,h1.-margin-small,h2.-margin-small,h3.-margin-small,h4.-margin-small,h5.-margin-small,h6.-margin-small{margin-bottom:15px}}@media (max-width:699px){.-margin\@small.o-h1,.-margin\@small.o-h2,.-margin\@small.o-h3,.-margin\@small.o-h4,.-margin\@small.o-h5,.-margin\@small.o-h6,.o-h.-margin\@small,h1.-margin\@small,h2.-margin\@small,h3.-margin\@small,h4.-margin\@small,h5.-margin\@small,h6.-margin\@small{margin-bottom:20px}}.o-h1,h1{line-height:.93333;font-weight:300}@media (max-width:699px){.o-h1,h1{font-size:17vw}}@media (min-width:700px) and (max-width:1024px){.o-h1,h1{font-size:8rem}}@media (min-width:1025px) and (max-width:1599px){.o-h1,h1{font-size:10rem}}@media (min-width:1600px){.o-h1,h1{font-size:11.85185rem;line-height:.925}}@media (max-width:699px){.o-h2,h2{font-size:23px;line-height:1.11111}}@media (min-width:700px) and (max-width:1599px){.o-h2,h2{font-size:3rem;line-height:1.11111}}@media (min-width:1600px){.o-h2,h2{font-size:3.55556rem;line-height:1.08333}}.o-h3,h3{margin-bottom:3.33333rem}@media (max-width:1599px){.o-h3,h3{font-size:2rem;line-height:1.13333}}@media (min-width:1600px){.o-h3,h3{font-size:2.37037rem;line-height:1.125}}@media (max-width:699px){.o-h3.-triforce,.o-h4,h3.-triforce,h4{font-size:20px}}@media (min-width:700px) and (max-width:1599px){.o-h4,h4{font-size:1.6rem}}@media (min-width:1600px){.o-h4,h4{font-size:1.77778rem}}@media (max-width:1599px){.o-h5,h5{font-size:1.33333rem;line-height:1.1}}@media (min-width:1600px){.o-h5,h5{font-size:1.54074rem;line-height:1.15385}}.o-h6,h6{font-size:1.06667rem}.o-scroll{box-sizing:border-box;overflow:hidden;width:100vw;will-change:transform}.has-smooth-scroll .o-scroll{position:relative}.scroll-content{margin:0;overflow:visible;height:100%}.o-scrollbar_wrapper{width:8px;position:fixed;right:0;top:0;bottom:0;z-index:705;transform-origin:center right}.o-scrollbar{background-color:#1c1c20;position:absolute;top:0;left:0;right:0;border-radius:5px;opacity:0;transition:opacity .6s cubic-bezier(.215,.61,.355,1)}.o-scrollbar_wrapper:hover .o-scrollbar,html.is-scrolling .o-scrollbar{opacity:.3}html.is-dragging .o-scrollbar{opacity:.8}.o-scrollbar:hover{cursor:grab}.c-preloader{position:fixed;top:0;right:0;left:0;height:100vh;z-index:500;font-size:0;text-align:center;transition:height 0s .6s,visibility 0s .6s}.c-preloader:before{height:100%;content:&quot;&quot;}.c-preloader:before,.c-preloader&gt;*{display:inline-block;vertical-align:middle}.c-preloader&gt;*{font-size:1rem}@media (min-width:700px){.c-preloader{padding-top:3.46667rem}}.has-dom-loaded .c-preloader{visibility:hidden;height:0;transition-delay:.6s}.has-dom-loading .c-preloader{visibility:visible;height:100vh;transition-delay:0s}.has-dom-first-loading.has-dom-loaded .c-preloader{transition-delay:2s}.is-transition-back .c-preloader,.is-transition-play .c-preloader{display:none}.c-preloader_background{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#000;transition:transform .6s cubic-bezier(.645,.045,.355,1);transform-origin:center bottom;transform:scaleY(1)}.has-dom-loaded .c-preloader_background{transform:scaleY(.001);transform-origin:center top}.is-transition-nav .c-preloader_background{transition-duration:0s}.is-transition-nav.has-dom-loaded .c-preloader_background{transition-duration:.6s}.is-transition-project.has-dom-loading .c-preloader_background{transition-delay:.6s;transition-duration:0s}.is-transition-project.has-dom-loaded .c-preloader_background{transition-delay:0s}.is-transition-back.has-dom-loading .c-preloader_background{z-index:1000}.c-preloader_inner{position:absolute;top:50%;left:0;right:7.6rem;z-index:10;transform:translateY(-50%);opacity:0;transition:opacity .6s cubic-bezier(.215,.61,.355,1) 1s}@media (max-width:699px){.c-preloader_inner{padding-top:140px}}.has-dom-first-load .c-preloader_inner,.has-dom-loading .c-preloader_inner{opacity:1;transition-delay:0s}.has-dom-loaded .c-preloader_inner{transition-delay:.3s}@media (max-width:1024px){.c-preloader_inner{right:0}}.c-preloader_line{position:relative;display:block;z-index:2;transition:opacity .3s;color:#fff;text-align:left;font-size:2.5vw;font-family:Haas,sans-serif}@media (max-width:699px){.c-preloader_line{font-size:22px;height:140px}}@media (min-width:700px) and (max-width:1599px){.c-preloader_line{padding-bottom:14rem}}@media (min-width:1600px){.c-preloader_line{padding-bottom:16.35556rem}}.c-preloader_line:last-child{padding-bottom:0}.c-preloader_line:before{content:&quot;&quot;;position:absolute;top:0;right:0;height:1px;left:0;background-color:#fff;transform:scaleX(0);transition:transform .6s cubic-bezier(.4,0,0,1)}.c-preloader_line:last-child{margin-bottom:0}.has-dom-loading .c-preloader_line:before{transform:scaleX(1)}.has-dom-loaded .c-preloader_line{opacity:0}.has-dom-loaded .c-preloader_line:before{transform:scaleX(0);transition-delay:.6s;transition-duration:0s}.has-dom-loading .c-preloader_line:first-child::before{transition-delay:.4s}.has-dom-loaded .c-preloader_line:first-child,.has-dom-loading .c-preloader_line:nth-child(2):before{transition-delay:.3s}.has-dom-loaded .c-preloader_line:nth-child(2){transition-delay:.2s}.has-dom-loading .c-preloader_line:nth-child(3):before{transition-delay:.5s}.has-dom-loaded .c-preloader_line:nth-child(3){transition-delay:.1s}.c-preloader_heading{position:absolute;top:0;left:0;padding:1rem 0;opacity:1;transition:opacity .6s cubic-bezier(.215,.61,.355,1) .3s}.has-dom-first-loaded .c-preloader_heading{opacity:0}.c-preloader_label{line-height:1.4;opacity:0;transform:translateY(120px);transition:opacity .6s cubic-bezier(.215,.61,.355,1) .6s,transform .6s cubic-bezier(.215,.61,.355,1) .6s}.has-dom-first-loading .c-preloader_label{opacity:1;transform:none}.has-dom-first-loading .c-preloader_label:first-child{transition-delay:.28s}.has-dom-first-loading .c-preloader_label:nth-child(2){transition-delay:.36s}.has-dom-first-loading .c-preloader_label:nth-child(3){transition-delay:.44s}.c-header{position:fixed;top:0;right:0;left:0;padding:2.8rem 0;z-index:900;margin-right:7.6rem;transition:color .3s cubic-bezier(.4,0,0,1);color:#1c1c20}html.has-dom-loading .c-header,html.ui-light .c-header,html[data-theme=dark]:not(.ui-dark) .c-header{color:#fff}html.ui-dark .c-header,html[data-theme=light]:not(.ui-light):not(.has-lisa-active):not(.has-nav-open):not(.has-dom-loading) .c-header{color:#1c1c20}[data-template=play] .c-header{margin-right:0}@media (max-width:1024px){.c-header{margin-right:0;padding:42px 0}}@media (min-width:1600px){.c-header{padding:3.25926rem 0;margin-right:8.88889rem}}@media (max-width:999px){.c-header{pointer-events:none}[data-template=home] .c-header{pointer-events:all}.c-header:before{content:&quot;&quot;;background-color:#fff;position:absolute;top:0;bottom:0;right:0;left:0;z-index:-1;transform-origin:center top;transform:scaleY(0);transition:transform .6s cubic-bezier(.215,.61,.355,1) .3s}html.is-not-top[data-direction=up]:not(.has-nav-open) .c-header{pointer-events:all}html.is-not-top[data-direction=up]:not(.has-nav-open) .c-header:before{transform:scaleY(1);transition-delay:0s}}@media (min-width:1025px){.c-header{pointer-events:none}html.is-edge .c-header,html.is-ie .c-header{color:#1c1c20}}@media (max-width:1024px){html.is-not-top[data-direction=up]:not(.has-nav-open) .c-header{color:#1c1c20}}.c-header_logoWrap{position:absolute;top:0;left:0}@media (max-width:699px){.c-header_logoWrap{margin:25px}}@media (min-width:700px) and (max-width:999px){.c-header_logoWrap{margin:25px 4rem}}@media (max-width:999px){.c-header_logoWrap{width:37px;height:37px;transform:rotate(90deg)}}.c-header_logo{display:block;opacity:0;transition:opacity .6s cubic-bezier(.215,.61,.355,1),transform .6s cubic-bezier(.215,.61,.355,1);pointer-events:all}.c-header_logo,.c-header_logo:focus,.c-header_logo:hover{color:currentColor}@media (max-width:999px){.c-header_logo{position:absolute;bottom:0;left:0;margin:0}.c-header_logo,.c-header_logo svg{width:37px;height:80px}}@media (max-width:999px){.c-header_logo{transform:translateX(-80px)}.has-dom-first-loaded:not([data-template=play]):not(.is-transition-play) .c-header_logo{transform:translateX(0)}html.has-dom-first-loaded:not([data-template=play]):not(.is-transition-play):not(.has-nav-open)[data-direction=down] .c-header_logo{transform:translateX(-80px)}}@media (min-width:1000px){.c-header_logo{transform:translateY(-2rem)}.has-dom-first-loaded:not([data-template=play]):not(.is-transition-play) .c-header_logo{transform:translateY(0)}.c-header_logo svg{width:2.73333rem;height:6rem}}.c-header_logo svg{fill:#1c1c20;transition:fill .3s cubic-bezier(.4,0,0,1)}html.has-dom-loading .c-header_logo svg,html.has-lisa-active .c-header_logo svg,html.has-nav-open .c-header_logo svg,html.ui-light .c-header_logo svg,html[data-theme=dark]:not(.ui-dark) .c-header_logo svg{fill:#fff}html.ui-dark:not(.has-lisa-active):not(.has-nav-open):not(.has-dom-loading) .c-header_logo svg,html[data-theme=light]:not(.ui-light):not(.has-lisa-active):not(.has-nav-open):not(.has-dom-loading) .c-header_logo svg{fill:#1c1c20}@media (max-width:999px){html.is-not-top[data-direction=up]:not(.has-nav-open) .c-header_logo svg{fill:#1c1c20}}@media (min-width:1000px) and (max-width:1599px){.c-header_logo{margin:2.8rem}}@media (min-width:1600px){.c-header_logo{margin:3.25926rem}.c-header_logo svg{width:3.2rem;height:7.05185rem}}.has-dom-first-loaded:not([data-template=play]):not(.is-transition-play) .c-header_logo{opacity:1}.has-dom-first-loaded:not([data-template=play]):not(.is-transition-play):not(.has-dom-animated) .c-header_logo{transition-delay:.6s}.has-dom-animated .c-header_logo,.is-transition-play .c-header_logo{transition-delay:0s}.c-header_tagline{float:left;font-size:1.13333rem;line-height:1.38889;pointer-events:auto}.c-header_tagline,.c-header_tagline:focus,.c-header_tagline:hover{color:currentColor}@media (max-width:1024px){.c-header_tagline{display:none}}.c-header_tagline sup{display:inline-block;font-size:.65em;vertical-align:super;top:0}.c-header_nav{float:right}@media (max-width:1024px){.c-header_nav{display:none}}.c-header_nav_list{margin:0;padding:0;list-style:none}.c-header_nav_item{display:inline-block;pointer-events:all}@media (max-width:1599px){.c-header_nav_item{margin-left:6.33333rem}}@media (min-width:1600px){.c-header_nav_item{margin-left:6.51852rem}}html.has-nav-open .c-header_nav_item{transform:translateY(-6.66667rem);opacity:0}.c-header_nav_link.-circleHover{display:block}.c-header_nav_item,.c-header_tagline{transform:translateY(-6.66667rem);opacity:0;transition:transform .45s cubic-bezier(.4,0,0,1),opacity .45s cubic-bezier(.4,0,0,1)}[data-template=error].has-dom-first-loaded:not(.has-nav-open) .c-header_nav_item,[data-template=error].has-dom-first-loaded:not(.has-nav-open) .c-header_tagline,html.has-dom-first-loaded.is-not-top.has-quick-menu:not(.has-nav-open) .c-header_nav_item,html.has-dom-first-loaded.is-not-top.has-quick-menu:not(.has-nav-open) .c-header_tagline,html.has-dom-first-loaded.is-top:not(.has-nav-open) .c-header_nav_item,html.has-dom-first-loaded.is-top:not(.has-nav-open) .c-header_tagline,html.has-dom-loading:not(.-first) .c-header_nav_item,html.has-dom-loading:not(.-first) .c-header_tagline{transition-delay:.7s;opacity:1;transform:translateY(0)}.has-lisa-active .c-header_nav_item,.has-lisa-active .c-header_tagline,.is-transition-play .c-header_nav_item,.is-transition-play .c-header_tagline,html[data-template=play] .c-header_nav_item,html[data-template=play] .c-header_tagline{opacity:0!important;transform:translateY(-6.66667rem)!important;transition-delay:0s!important}.c-header_nav_item.-burger,.c-header_tagline.-burger{transform:none}.c-header_burger{display:inline-block;position:absolute;pointer-events:all;transition:transform .6s cubic-bezier(.77,0,.175,1) .2s;transform:translateY(-6.66667rem)}@media (max-width:699px){.c-header_burger{right:15px;padding:10px;width:45px;top:28px}}@media (min-width:700px){.c-header_burger{width:1.66667rem;padding:.7rem 0}}@media (min-width:700px) and (max-width:999px){.c-header_burger{top:28px;right:4rem}}@media (min-width:1000px) and (max-width:1024px){.c-header_burger{right:4rem}}@media (min-width:1025px) and (max-width:1599px){.c-header_burger{right:3.6rem}}@media (min-width:1600px){.c-header_burger{top:3.25926rem;right:4.19259rem}}[data-template=error].has-dom-first-loaded:not(.has-nav-open) .c-header_burger,[data-template=home].has-dom-first-loaded:not(.has-nav-open) .c-header_burger,html.has-dom-first-loaded:not(.has-nav-open) .c-header_burger{transform:translateY(0)}.has-lisa-active .c-header_burger,.is-transition-play .c-header_burger,html[data-template=play] .c-header_burger{transform:translateY(-6.66667rem)!important;transition-delay:0s!important}.c-header_burger:after,.c-header_burger:before{content:&quot;&quot;;display:block;border-top:2px solid;transform:scaleX(0);transition:transform .45s cubic-bezier(.4,0,0,1),border-color .25s ease}.has-dom-first-loaded .c-header_burger:after,.has-dom-first-loaded .c-header_burger:before{transform:translateX(0);transition-delay:1.5s,0s}.has-dom-animated .c-header_burger:after,.has-dom-animated .c-header_burger:before,.has-dom-loading .c-header_burger:after,.has-dom-loading .c-header_burger:before{transition-delay:0s}html.ui-light .c-header_burger:after,html.ui-light .c-header_burger:before,html[data-theme=dark] .c-header_burger:after,html[data-theme=dark] .c-header_burger:before{background-color:#fff}html.has-nav-open .c-header_burger:after,html.has-nav-open .c-header_burger:before{background-color:#1c1c20}.c-header_burger:before{transform:translateX(-50%);margin-bottom:6px}.c-header_burger:after{transform:translateX(50%)}@media (min-width:1025px){.c-header_burger:hover{cursor:pointer}.c-header_burger:hover:before{transform:translateX(-20%)}.c-header_burger:hover:after{transform:translateX(20%)}}.has-nav-open .c-header_burger{transition-delay:0s;transform:translateX(-33.33333vw) translateX(100%) translateX(2.8rem) translateX(7.6rem)}@media (max-width:1024px){.has-nav-open .c-header_burger{transform:translateX(-33.33333vw) translateX(100%) translateX(.8rem) translateX(2.16667rem)}}@media (max-width:999px){.has-nav-open .c-header_burger{transform:none}}@media (min-width:1600px){.has-nav-open .c-header_burger{transform:translateX(-33.33333vw) translateX(100%) translateX(3.25926rem) translateX(8.88889rem)}}.has-nav-open .c-header_burger:before{border-color:#1e1f21;transform:translateY(4px) rotate(45deg)}.has-nav-open .c-header_burger:after{border-color:#1e1f21;transform:translateY(-4px) rotate(-45deg)}.c-header_burger_background{position:absolute;top:50%;left:50%;background-color:#fff;z-index:-1;border-radius:50%;display:block;transform:translate(-50%,-50%) scale(0);transition:transform .4s cubic-bezier(.17,.67,.3,1.33)}@media (max-width:699px){.c-header_burger_background{width:50px;height:50px}}@media (min-width:700px){.c-header_burger_background{width:4.33333rem;height:4.33333rem}}.has-nav-open .c-header_burger_background{transform:translate(-50%,-50%) scale(1);transition-delay:.6s}.has-nav-open .c-header_burger_background:hover{transform:translate(-50%,-50%) scale(1.1);transition-delay:0s}.c-play-button{position:fixed;top:0;right:0;height:100vh;background-color:#1e1f21;font-size:0;text-align:center;overflow:hidden;transition:transform .6s cubic-bezier(.645,.045,.355,1);z-index:700;transform:translateX(100%);width:100%}.c-play-button:before{height:100%}.c-play-button:before,.c-play-button&gt;*{display:inline-block;vertical-align:middle}.c-play-button&gt;*{font-size:1rem}@media (min-width:1025px) and (max-width:1599px){.has-dom-first-loaded:not(.has-nav-open) .c-play-button{transform:translateX(calc(100% - 7.6rem))}}@media (min-width:1000px){.has-nav-open .c-play-button{transform:translateX(66%);transition-delay:0s}}@media (min-width:1600px){.has-dom-first-loaded:not(.has-nav-open) .c-play-button{transform:translateX(calc(100% - 8.88889rem))}}@media (min-width:1025px){.has-dom-first-loaded:not(.has-nav-open):not(.is-transition-back) .c-play-button{transition-delay:.3s}.has-dom-first-loaded:not(.has-nav-open):not(.is-transition-back):not(.has-dom-animated):not(.has-dom-loading)[data-template=home] .c-play-button{transition-delay:1.2s}}@media (max-width:1024px){.c-play-button{height:0;transition:height 0s .6s,transform .6s cubic-bezier(.645,.045,.355,1)}.has-nav-open .c-play-button,.is-transition-play .c-play-button,html[data-template=play] .c-play-button{height:100vh}}@media (max-width:1024px) and (min-width:1000px){.has-nav-open .c-play-button,.is-transition-play .c-play-button,html[data-template=play] .c-play-button{transform:translateX(0)!important;transition-delay:0s!important}}.is-transition-play .c-play-button,html[data-template=play] .c-play-button{transform:translateX(0)!important;transition-delay:0s!important;transition-duration:.9s!important}html.has-dom-loading .c-play-button{pointer-events:none}.c-play-button:before{content:&quot;&quot;;position:absolute;top:0;bottom:0;right:-2px;left:-2px;z-index:2;background-color:#1c1c20;opacity:0;transition:opacity .6s cubic-bezier(.215,.61,.355,1)}@media (min-width:1200px){html.has-dom-loaded .c-play-button:hover:before{opacity:.5}}.c-play-button_circle{position:absolute;display:inline-block;width:2.66667rem;height:2.66667rem;z-index:2;top:50%;margin-right:0;margin-left:-1.33333rem;opacity:1;transition:opacity .4s cubic-bezier(.215,.61,.355,1) .4s}@media (max-width:1599px){.c-play-button_circle{left:3.8rem}}@media (min-width:1600px){.c-play-button_circle{left:4.5rem}}.c-play-button_circle:before{border-radius:50%;border:2px solid #fff;animation:a 3s infinite}.c-play-button_circle:after,.c-play-button_circle:before{content:&quot;&quot;;position:absolute;top:0;right:0;bottom:0;left:0;transition:opacity .6s cubic-bezier(.215,.61,.355,1),transform .6s cubic-bezier(.215,.61,.355,1)}.c-play-button_circle:after{border-radius:50%;border:4px solid #fff;transform:scale(.0001);opacity:0}.c-play-button:hover .c-play-button_circle:before{transform:scale(1.5);opacity:0}.c-play-button:hover .c-play-button_circle:after{opacity:1;transform:scale(1)}.has-nav-open .c-play-button_circle{opacity:0;transition-delay:.1s}.is-transition-play .c-play-button_circle,html[data-template=play] .c-play-button_circle{opacity:0;transition-delay:0s}.c-play-canvas{position:absolute;top:0;right:0;left:0;height:100vh;width:100%;z-index:1;background-color:#8395a4;transform:translateX(-50%);transition:opacity .6s cubic-bezier(.215,.61,.355,1),transform .6s cubic-bezier(.77,0,.175,1) .2s;opacity:0}.has-nav-open .c-play-canvas{transform:none;transition-delay:0s}.is-transition-play .c-play-canvas,html[data-template=play] .c-play-canvas{transform:none;transition-delay:0s;transition-duration:.8s}.has-shapes-ready .c-play-canvas{opacity:1}@media (max-width:1199px){.c-play-canvas{position:fixed;height:100%}}@keyframes a{0%{transform:scale3d(.9,.9,.9)}50%{transform:scale3d(1.1,1.1,1.1)}to{transform:scale3d(.9,.9,.9)}}.c-lisa-button{position:fixed;bottom:9vh;right:7.6rem;transition:transform .6s cubic-bezier(.77,0,.175,1) .1s;transform:translateY(25vh);z-index:850}@media (max-width:699px){.c-lisa-button{right:25px;bottom:25px}}@media (max-width:1024px){.c-lisa-button{z-index:1100}}@media (min-width:700px) and (max-width:1024px){.c-lisa-button{right:2rem;bottom:2rem}}@media (min-width:1025px) and (max-width:1599px){.c-lisa-button{margin-right:-3.16667rem}}@media (min-width:1600px){.c-lisa-button{right:8.88889rem;margin-right:-3.16667rem}}[data-template=play] .c-lisa-button{right:auto;left:7.6rem}@media (max-width:1024px){[data-template=play] .c-lisa-button{left:2rem}}@media (min-width:1025px){[data-template=play] .c-lisa-button{margin-right:0;margin-left:-3.16667rem}}@media (min-width:1600px){[data-template=play] .c-lisa-button{left:8.88889rem}}.c-lisa-button:before{position:absolute;display:block;content:&quot;&quot;;top:50%;left:50%;width:250vw;height:250vw;background-color:#4d84f1;border-radius:50%;transform:translate3d(-50%,-50%,0) scale(.005);transition:transform .5s cubic-bezier(.645,.045,.355,1) .5s,opacity .5s ease;opacity:1;pointer-events:none;z-index:100}@media (max-aspect-ratio:1/1){.c-lisa-button:before{width:250vh;height:250vh}}.has-lisa-active .c-lisa-button:before{opacity:0;transform:translate3d(-50%,-50%,0) scale(1);transition:transform .5s cubic-bezier(.645,.045,.355,1),opacity .5s ease .6s}.c-lisa-button .o-circle-button{position:relative;z-index:200}.has-dom-first-loaded .c-lisa-button{transform:translateY(0)}.has-dom-loading.is-transition-back .c-lisa-button,.has-dom-loading.is-transition-play .c-lisa-button{transform:translateY(25vh)}.has-dom-animated.has-nav-open .c-lisa-button{transition-delay:.1s;transform:translateX(-33.33333vw) translateX(7.6rem)}@media (max-width:699px){.has-dom-animated.has-nav-open .c-lisa-button{transform:translateY(-25px)}}@media (min-width:700px) and (max-width:999px){.has-dom-animated.has-nav-open .c-lisa-button{transform:translateY(-65px)}}@media (min-width:1000px) and (max-width:1024px){.has-dom-animated.has-nav-open .c-lisa-button{transform:translateX(-27vw)}}@media (min-width:1025px) and (max-width:1599px){.has-dom-animated.has-nav-open .c-lisa-button{transform:translateX(-33.33333vw) translateX(7.6rem)}}@media (min-width:1600px){.has-dom-animated.has-nav-open .c-lisa-button{transform:translateX(-33.33333vw) translateX(8.88889rem)}}.c-lisa-button_bg{transition:background-color .5s ease .75s,transform .45s cubic-bezier(.17,.67,.3,1.33)}.has-lisa-active .c-lisa-button_bg{background-color:#fff!important;transition:background-color .5s ease,transform .45s cubic-bezier(.17,.67,.3,1.33)}.c-lisa-button_icon{transform:translateZ(1px);opacity:1;transition:opacity .5s ease}.c-lisa-button_icon.-hidden{opacity:0}.c-fancy-slider{position:absolute;top:0;left:0;width:100%;height:100%;z-index:500;color:#fff;cursor:grab;overflow:hidden;transform:translateY(150%);transition:transform 1s cubic-bezier(.25,.46,.45,.94);opacity:0}.has-dom-animated .c-fancy-slider,.has-dom-loading .c-fancy-slider{opacity:1}.has-dom-animated .c-fancy-slider{transform:none;transition-delay:.5s;transition-duration:1.2s;transition-timing-function:cubic-bezier(.23,1,.32,1)}.c-fancy-slider.grabbed{cursor:grabbing}.c-fancy-slider_visuals{position:absolute;top:0;left:0;width:100%;height:100%}.c-fancy-slider-visuals{display:block;width:100%}.is-touch .c-fancy-slider-visuals{white-space:nowrap;font-size:0}.c-fancy-slider-visuals_list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;white-space:nowrap;will-change:transform}.is-touch .c-fancy-slider-visuals_list{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row}.c-fancy-slider-visuals_item{position:relative;height:100vh;-ms-flex-negative:0;flex-shrink:0;opacity:0;transition:transform .4s cubic-bezier(.215,.61,.355,1),opacity 1s 1s;transform:scale(1)}.has-slider-hover .c-fancy-slider-visuals_item{transform:scale(.9);transition-duration:.4s;transition-timing-function:cubic-bezier(.17,.67,.3,1.33)}.c-fancy-slider-visuals_item:first-child,.has-dom-animated .c-fancy-slider-visuals_item{opacity:1}.is-touch .c-fancy-slider-visuals_item{width:100vw}@media (max-width:699px){.is-ios .c-fancy-slider-visuals_item{height:70vh}}.c-fancy-slider-visuals_item_inner{position:absolute;top:0;bottom:0;right:0;left:0;will-change:transform}@media (max-width:699px){.is-ios .c-fancy-slider-visuals_item_inner{top:35%;bottom:0}}.c-fancy-slider-visuals_item_phone{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;will-change:transform}.c-fancy-slider-visuals_item_phone.-left{transform:translate(-90%,-65%);width:35vh}@media (min-width:1000px){.c-fancy-slider-visuals_item_phone.-left{transform:translate(-90%,-75%)}}@media (max-width:999px) and (min-width:700px){.c-fancy-slider-visuals_item_phone.-left{width:45vw}}@media (max-width:699px) and (max-aspect-ratio:1/1){.c-fancy-slider-visuals_item_phone.-left{width:55vw;margin-top:-5vh}}.c-fancy-slider-visuals_item_phone.-right{transform:translate(0);width:35vh}@media (min-width:1000px){.c-fancy-slider-visuals_item_phone.-right{transform:translateY(-20%)}}@media (max-width:999px) and (min-width:700px){.c-fancy-slider-visuals_item_phone.-right{width:45vw}}@media (max-width:699px) and (max-aspect-ratio:1/1){.c-fancy-slider-visuals_item_phone.-right{width:55vw;margin-top:-15vh}}.c-fancy-slider-visuals_item_phone img{width:100%}.c-fancy-slider-visuals_item_laptop{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;will-change:transform;width:65vh}.c-fancy-slider-visuals_item_laptop img{width:100%}@media (max-width:999px) and (max-aspect-ratio:1/1){.c-fancy-slider-visuals_item_laptop{width:85vw;transform:translate(-50%,-60%)}}
	</style>
	<style type="text/css">
		#myid{
			background-image: url("../../uploads/projects/Bayswater/img_1920x1280_bayswater.jpg");
			background-size: cover;
		}
		.pac-container:after {
    /* Disclaimer: not needed to show 'powered by Google' if also a Google Map is shown */

    background-image: none !important;
    height: 0px;
}

	</style>
	<link rel="stylesheet" id="main-css" href="../../assets/styles/main3e3a.css?v=4.51" media="none" onload="if(media!='all')media='all'">

	<script>
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	ga('create', 'UA-1837138-68', 'auto');

	ga('require', 'eventTracker');
	ga('require', 'outboundLinkTracker');
	ga('require', 'urlChangeTracker');
	// ga('require', 'maxScrollTracker');

	ga('send', 'pageview');
	</script>
	
</head>
<body data-module="Load" style="opacity: 0;">
	<!-- <div class="c-debug-safari"></div> -->

	<div class="c-preloader js-preloader">
		<div class="c-preloader_background js-preloader-background"></div>
		<div class="c-preloader_inner">
			<div class="o-container">
				<div class="c-preloader_line">
					<div class="c-preloader_heading">
						<!-- <p class="c-preloader_label">
							iBridge
						</p>
						<p class="c-preloader_label">
							Digital-First Design
						</p> -->
					</div>
				</div>
				<div class="c-preloader_line"></div>
				<div class="c-preloader_line"></div>
			</div>
		</div>
	</div>

	<a class="c-play-button">
		<span class="u-screen-reader-text">Play hard</span>
		<canvas class="c-play-canvas" data-module="PlayShapes"></canvas>
		<!-- <span class="c-play-button_circle"></span> -->
	</a>

	<div data-load-container>
		<header class="c-header js-header">
			<div class="c-header_logoWrap">
				<a class="c-header_logo" href="">
					<span class="u-screen-reader-text">Home</span>
					<!-- <svg role="img"><use xlink:href="../../assets/images/sprite.svg#logo"></use></svg> -->
				</a>
			</div>
			<div class="o-container">
				<a href="" class="c-header_tagline">
					<img src="../../assets/images/logo.png" class="logowid">
				</a>
				<nav class="c-header_nav">
					<ul class="c-header_nav_list">
						<li class="c-header_nav_item">
							<a class="c-header_nav_link o-link -circleHover" href="">
								Projects
								<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle">
									<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"></path>
								</svg>
							</a>
						</li>
						<li class="c-header_nav_item">
							<a class="c-header_nav_link o-link -circleHover" href="../about.html">
								Agency 
								<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle">
									<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"></path>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<button class="c-header_burger" data-module="NavButton" type="button" ga-on="click" ga-event-category="ui.menu.burger" ga-event-action="toggle">
				<span class="u-screen-reader-text">Menu</span>
				<span class="c-header_burger_background"></span>
			</button>
		</header>

		<div class="c-nav_wrapper">
			<div class="c-nav_background"></div>
			<div class="c-nav_layout o-layout">
				<div class="o-layout_item u-2/3@from-thousand">
					<div class="c-nav_section c-nav_main">
						<a class="c-nav_lang_mobile" href="../../fr/projets/design-canada.html" data-load="false" ga-on="click" ga-event-category="ui.lang-switcher" ga-event-action="click" ga-event-label="FR">
							FR
						</a>
						<p class="c-nav_section_label">
							Work hard
						</p>
						<ul class="c-nav_list">
							<li class="c-nav_list_item">
								<a href="" data-load="nav">
									Projects
								</a>
							</li>                            <li class="c-nav_list_item">
								<a href="" data-load="nav">
									Agency
								</a>
							</li>                            <li class="c-nav_list_item">
								<a href="" data-load="nav">
									Team
								</a>
							</li>                                                        <li class="c-nav_list_item">
								<a href="" data-load="nav">
									Careers
								</a>
							</li>                            <li class="c-nav_list_item">
								<a href="" data-load="nav">
									Contact
								</a>
							</li>                        </ul>
					</div>
				</div>
				<div class="o-layout_item u-1/3@from-thousand u-none@to-thousand">
					<div class="c-nav_section c-nav_secondary">
						<p class="c-nav_section_label">
							Play hard
						</p>
						<ul class="c-nav_list">
							<li class="c-nav_list_item">
								<a href="" data-load="play">
									Work hard, play harder, never play it safe.
								</a>
							</li>                        </ul>
					</div>
				</div>
			</div>
			<a class="c-nav_play u-none@from-thousand" href="" data-load="play">
				<span class="o-container">
					<p class="c-nav_play_title">
						Play hard
					</p>
				</span>
			</a>
			<ul class="c-nav_socials c-social" ga-on="click" ga-event-category="ui.social.nav" ga-event-action="click" ga-event-label="">
				<li class="c-nav_socials_item c-social_item">
					<a href="https://facebook.com/" class="o-link -circleHover" target="_blank" rel="noopener noreferrer">
						<span class="u-screen-reader-text">Facebook</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#facebook"></use></svg>
					</a>
				</li>
				<li class="c-nav_socials_item c-social_item">
					<a href="https://twitter.com/" class="o-link -circleHover" target="_blank" rel="noopener noreferrer">
						<span class="u-screen-reader-text">Twitter</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#twitter"></use></svg>
					</a>
				</li>
				<li class="c-nav_socials_item c-social_item">
					<a href="https://instagram.com/" class="o-link -circleHover" target="_blank" rel="noopener noreferrer">
						<span class="u-screen-reader-text">Instagram</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#instagram"></use></svg>
					</a>
				</li>
				
			</ul>
			<a class="c-nav_lang o-link -circleHover" href="../../fr/projets/design-canada.html" data-load="false" ga-on="click" ga-event-category="ui.lang-switcher" ga-event-action="click" ga-event-label="FR">
				FR
				<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle -small">
					<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"></path>
				</svg>
			</a>
		</div>
<div class="o-scroll" data-module="Scroll" data-main-scroll>
	<main class="o-page -no-padding-top">
		<div class="c-project">
			<div class="o-container">
				<div class="o-line -elastic">
					<canvas class="o-line_canvas js-animate" data-auto="true" data-module="Rope" data-delay="0.4" data-color="black"></canvas>
				</div>
			</div>

			<div class="c-project-header js-animate" data-module="ProjectHeader" data-callback="trigger.ProjectHeader()" data-repeat>
				<div class="c-project-header_block">
					<div class="o-container">
						<div class="o-header-block">
							<div class="o-header-block_title u-anim -parent -delay-4">Client</div>
						</div>
					</div>

					<div class="c-project-header_block-bottom">
						<div class="c-project-header_title -rail" data-module="Rail" data-shuffle data-rail-speed="1">
							<span class="c-project-header_word o-h1">Bayswater &nbsp;Bathrooms</span>
						</div>
					</div>
				</div>

				<div class="c-project-header_block">
					<div class="o-container">
						<div class="o-line -elastic">
							<canvas class="o-line_canvas js-animate" data-auto="true" data-module="Rope" data-delay="0.3" data-color="black"></canvas>
						</div>
						<div class="o-header-block">
							<div class="o-header-block_title u-anim -parent -delay-3">Expertise</div>
						</div>
					</div>

					<div class="c-project-header_block-bottom -container">
						<div class="c-project-header_title">
							<span class="c-project-header_word o-h1">Wordpress</span>
						</div>
					</div>
					
				</div>

				<div class="o-container">
					<div class="c-project-header_cta-wrapper || js-animate" data-speed="-1" data-position="top">
						<div class="c-project-header_cta">
							<a href="https://www.bayswaterbathrooms.co.uk/" target="_blank" class="o-circle-button -large">
								<div class="o-circle-button_bg" style="background-color: #EB2931;"></div>
								<span class="o-circle-button_label">Visit Website</span>
							</a>
						</div>
					</div>
				</div>

				<!-- <div class="c-project-header_block">
					<div class="o-container">
						<div class="o-line -elastic">
							<canvas class="o-line_canvas js-animate" data-auto="true" data-module="Rope" data-delay="0.2" data-color="black"></canvas>
						</div>
						<div class="o-header-block">
							<div class="o-header-block_title u-anim -parent -delay-2">Launch Date</div>
						</div>
					</div>

					<div class="c-project-header_block-bottom -container">
						<div class="c-project-header_title">
							<span class="c-project-header_word o-h1">Apr—18</span>
						</div>
					</div>

					<div class="o-container">
						<div class="o-line -elastic">
							<canvas class="o-line_canvas js-animate" data-auto="true" data-module="Rope" data-delay="0.1" data-color="black"></canvas>
						</div>
					</div>
				</div> -->
	<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>
	<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
	<script src="https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"></script>
	<div class="lap3d" style="display: none;">
		<model-viewer class="lap3dmod"
				  src="../../assets/images/bath.glb"
				  alt="A 3D model of an astronaut"
				  background-color="#1c1c20"
				  shadow-intensity="1"
				  camera-controls
				  ></model-viewer>
	</div>
	
				<!-- <div class="c-project-header_device-wrapper || js-animate" data-speed="-0.5" data-position="top">
					<div class="c-project-header_device || c-project-device" data-gui="false" data-module="ProjectLaptop" data-texture="../../uploads/projects/devices/DESKTOP_TEXTURE_Design_canada.jpg">
						<img src="../../assets/images/baya001.jpg" style="width: 200px;height: 400px;">
						
					</div>
				</div> -->
				<script type="module" src="https://unpkg.com/@google/model-viewer@v0.3.1/dist/model-viewer.js"></script>
				<script nomodule src="https://unpkg.com/@google/model-viewer@v0.3.1/dist/model-viewer-legacy.js"></script>
			</div>

			<div class="o-container || c-project_intro">

				<div class="c-project_awards || o-header-block || c-project_intro_item || js-animate">
					<div class="o-line -elastic || u-none@from-small">
						<canvas class="o-line_canvas js-animate" data-auto="true" data-module="Rope" data-delay="0.1" data-color="black"></canvas>
					</div>

					

					
				</div>


				<div class="o-line -noMargin || u-none@to2-small"></div>

					<div class="o-header-block || c-project_intro_item -text -about js-animate">
						<div class="o-line -noMargin || u-none@from-small"></div>
						<h2 class="o-header-block_title u-anim -parent -delay-2">About Bayswater Bathrooms</h2>
						<p class="u-anim -parent -delay-4">Bayswater is a brand of beautifully designed bathrooms–
							two ranges of Victorian and Edwardian porcelain, brassware, furniture and fittings. Bayswater is inspired by an era of unmatched inventiveness and creativity. The Victorian period was a veritable explosion of new ideas and pioneering innovation. It’s no wonder that Victorian style bathrooms are still loved one hundred and fifty years later. Bayswater builds on this tradition by bringing these established aesthetic values and contemporary designs together. The result is a range of porcelain, brassware, furniture and fittings that have never been seen before.</p>
					</div>
					<div class="o-header-block || c-project_intro_item -text -work js-animate">
						<div class="o-line -noMargin || u-none@from-small"></div>

						<h2 class="o-header-block_title u-anim -parent -delay-3">The challenge</h2>
						<p class="u-anim -parent -delay-5">Having worked with a brand agency in London, iBridge Digital were approached to redesign the Bayswater site. The new site needed to improve the customers journey whilst showcasing technical aspects of bathroom-design as well as ensuring the refinement of Victorian style remains alive and relevant.</p>
					</div>

				<div class="c-fancy-video c-project_intro_item js-animate -paused has-video" data-module="FancyVideo">
					<div class="c-fancy-video_bg" style="background-color:#EB2931"></div>
					<div id="myid">
						<div id="ytplayer">
						<!-- <iframe src="https://www.youtube.com/embed/N8vMn4x5jAo?autoplay=1&controls=0&loop=1&playlist=EngW7tLk6R8&amp;showinfo=0" width="640" height="360" frameborder="0" autoplay allowloop muted allow="autoplay;loop;encrypted-media" id="myvid">
						</iframe> -->
						</div>
				</div>

					<div class="c-fancy-video-img_wrapper">
						<figure class="c-fancy-video-img_inner js-animate" data-speed="1.25" >
							<!-- <img class="c-fancy-video-img" src="../../uploads/projects/Bayswater/Objet_flottant_Design_Canada_1400x1040_01.png" alt="" style="display: none;" /> -->
						</figure>
					</div>
					<div class="c-fancy-video-inner">
						<div class="c-fancy-video-img_wrapper">
							<figure class="c-fancy-video-img_inner js-animate" data-speed="-0.6">
								<!-- <img class="c-fancy-video-img" src="../../uploads/projects/Bayswater/Objet_flottant_Design_Canada_1400x1040_02.png" alt="" style="display: none;" /> -->
							</figure>
						</div>
					</div>

					<div class="c-fancy-video-player || js-player" id="divContent">
						<iframe src="https://www.youtube.com/embed/pIZpXQtf0Hw" width="640" height="360" frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media"></iframe>
						<!-- <iframe width="640" height="360"
						src="https://www.youtube.com/embed/x-mNqbUX_WU">
						</iframe> -->
					</div>


					<div class="c-fancy-video-cursor || o-cursor_wrapper || js-video-cursor js-animate" data-module="CursorZone" data-repeat data-callback="trigger.CursorZone()">
						<div class="c-fancy-video-cursor_zone || js-drag-zone"></div>

						<div class="o-cursor -white -center-mobile || js-cursor">
							<div class="o-cursor_background"></div>
							<div class="o-cursor_label">
								<div class="o-cursor_label_outer">
									<div class="o-cursor_label_inner">
										<span>Play</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				

			</div>

				<figure class="o-image -parallax">
	<div class="o-image_inner">
		<img src="../../uploads/projects/Bayswater/img_1920x1260_bayswater.jpg" alt="" class="js-animate" data-speed="-6">
	</div>
</figure>
				<div class="c-device -desktop o-container">
	<div class="c-device_inner u-anim -delay-3 js-animate">
		<img src="../../assets/images/desktop.png" alt="">
		<div class="c-device_media">
			<div class="o-vimeo-player">
				<!-- <iframe class="js-animate" data-repeat data-callback="launch.VimeoPlayer()" data-module="VimeoPlayer" src="https://www.youtube.com/embed/x-mNqbUX_WU" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media"></iframe> -->
				<!-- <video id="desk_vid" loop>
				  <source src="../../assets/videos/bayswater.mp4" type="video/mp4">
				</video> -->
				<video id="desk_vid" autoplay loop>
				  <source src="../../assets/videos/bayswater.mp4"  type="video/mp4">
				</video>
			</div>
		</div>
	</div>
</div>


				<div class="o-section -padding-v-huge" style="background-color:#F5F5F5;">
	<figure class="o-container">
		<div class="o-vimeo-player js-animate u-anim -delay-1">
			<!-- <iframe class="js-animate ifrme_rempoi" data-repeat data-callback="launch.VimeoPlayer()" data-module="VimeoPlayer" src="https://www.youtube.com/embed/x-mNqbUX_WU?controls=false&amp;autoplay=1&amp;transparent=false&amp;autopause=true&amp;loop=1&amp;muted=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media" autoplay></iframe> -->
			<iframe src="https://www.youtube.com/embed/N8vMn4x5jAo?&autoplay=1&controls=0&loop=1&mute=1&playlist=N8vMn4x5jAo&amp;showinfo=0" width="640" height="360" frameborder="0" autoplay allowloop muted allow="autoplay;loop;encrypted-media"></iframe>
			<iframe src="https://www.youtube.com/embed/N8vMn4x5jAo?&autoplay=1&controls=0&loop=1&mute=1&playlist=EngW7tLk6R8&amp;showinfo=0" width="640" height="360" frameborder="0" autoplay allowloop muted allow="autoplay;loop;encrypted-media"></iframe>
			<!-- <iframe src="https://www.youtube.com/embed/N8vMn4x5jAo?&autoplay=1&controls=0&loop=1&mute=1&showinfo=0" width="640" height="360" frameborder="0" autoplay allowloop muted allow="autoplay;loop;encrypted-media"></iframe> -->
		</div>
	</figure>
</div>

				<figure class="o-image -parallax">
	<div class="o-image_inner">
		<img src="../../uploads/projects/Bayswater/img_1920x1280_bayswater-features.jpg" alt="" class="js-animate" data-speed="-6">
	</div>
</figure>
				<div class="o-layout js-animate">
	<div class="o-layout_item u-1/2@from-medium">
		<div class="c-mobile-device" style="background:#E6E6E6;">
			<div class="c-mobile-device_inner u-anim -delay-3 js-animate">
				<svg role="img" style="fill:#272727;"><use xlink:href="../../assets/images/sprite.svg#mobile-device"></use></svg>
				<img src="../../uploads/projects/Bayswater/mobile_screen_720x1280_bayswater_01.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="o-layout_item u-1/2@from-medium">
		<div class="c-mobile-device" style="background:#0E0E0E;">
			<div class="c-mobile-device_inner u-anim -delay-5 js-animate">
				<svg role="img" style="fill:#DCDCDC;"><use xlink:href="../../assets/images/sprite.svg#mobile-device"></use></svg>
				<img src="../../uploads/projects/Bayswater/mobile_screen_720x1280_bayswater_02.jpg" alt="">
			</div>
		</div>
	</div>
</div>

				<div class="o-section -padding-v-huge" style="background-color:#FFFFFF;">
	<figure class="o-container">
		<div class="o-vimeo-player js-animate u-anim -delay-1" style="padding-bottom: 0% !important;">
			<!-- <iframe class="js-animate" data-repeat data-callback="launch.VimeoPlayer()" data-module="VimeoPlayer" src="https://player.vimeo.com/video/330879106?controls=false&amp;autoplay=0&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1" width="640" height="360" muted frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media"></iframe> -->
			<video id="normal_vid" autoplay loop>
				  <source src="../../assets/videos/bayswater-categories.mp4"  type="video/mp4">
				</video>
			<!-- <video id="desk_vid" loop>
			  <source src="../../assets/videos/bayswater.mov" type="video/mp4">
			</video> -->
		</div>
	</figure>
</div>
				<!--
- backgroundColor: #EB2931
-->

<section style="background-color: #b37b51 ;">
	<section class="c-quote_wrapper -padding-top">
		<div class="c-quote js-animate" data-module="Quote" data-callback="trigger.Quote()">
			<div class="c-quote_header o-container">
				<div class="o-layout">
					<div class="o-layout_item u-1/2@from-small"></div>
					<div class="o-layout_item u-1/2@from-small">
						<div class="o-line -text"></div>
						<div class="o-section">
							<p class="o-h4 u-no-margin c-quote_subtitle u-2/3@from-small u-anim -delay-1 js-animate">Greg Durrell<br>Batswater Bathrooms</p>
						</div>
					</div>
				</div>
			</div>

			<div class="o-cursor_wrapper -show-native js-animate" data-module="CursorZone" data-draggable="true" data-repeat data-callback="trigger.CursorZone()">
				<div class="o-cursor -alpha js-cursor -ahead -drag -points -h">
					<div class="o-cursor_background"></div>
				</div>

				<div class="js-drag-zone || o-icon-drag-h_wrapper">
					<div class="o-icon-drag-h_inner -white-alpha -right">
						<svg class="o-icon-drag-h" role="img"><use xlink:href="../../assets/images/sprite.svg#icon-drag-h"></use></svg>
					</div>

					<div class="c-quote_outer">
						<div class="c-quote_inner || js-inner">
							<blockquote class="c-quote_text || js-text">
								“We are extremely happy with the outcome of the website and feedback from the audience is just amazing.”
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
				<figure class="o-image -parallax">
	<div class="o-image_inner">
		<img src="../../uploads/projects/Bayswater/img_1920x1260_bayswater_02.jpg" alt="" class="js-animate" data-speed="-6">
	</div>
</figure>
				<div class="o-container">
	<div class="c-feature || o-layout">
		<div class="c-feature_content || o-layout_item u-2/5@from-medium">
			<p class="u-anim js-animate -delay-1">Animations</p>
			<div class="o-line -text"></div>
			<h2 class="c-feature_title u-anim js-animate -delay-1 o-h3">Animated transitions</h2>
			<div class="u-anim js-animate -delay-1">
				<p>Each animated transition presents a design featured in the documentary. Transitions take place when a user loads a page, ensuring the audience is entertained with a design-oriented, playful environment at all times. Geek-insider: JavaScript (Barba.js) and CSS-based animations were used to build and manage these transitions, creating a seamless and continuous experience throughout the website.</p>
			</div>
		</div>
		<figure class="c-feature_visual || o-layout_item u-3/5@from-medium">
			<div class="o-vimeo-player">
				<!-- <iframe class="js-animate" data-repeat data-callback="launch.VimeoPlayer()" data-module="VimeoPlayer" src="https://player.vimeo.com/video/330881462?controls=false&amp;autoplay=0&amp;transparent=false&amp;autopause=false&amp;loop=1&amp;muted=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media"></iframe> -->
				<!-- <iframe src="https://www.youtube.com/embed/N8vMn4x5jAo?&autoplay=1&controls=0&loop=1&mute=1&playlist=EngW7tLk6R8&amp;showinfo=0" width="640" height="360" frameborder="0" autoplay allowloop muted allow="autoplay;loop;encrypted-media"></iframe> -->
				<img src="../../uploads/projects/Bayswater/img_1920x1260_wireframe_02.jpg" alt="" class="js-animate" data-speed="-6">
			</div>
		</figure>
	</div>
</div>
				<div class="o-section -padding-v-huge" style="background-color:#FFFFFF;">
	<figure class="o-container">
		<div class="o-vimeo-player js-animate u-anim -delay-1">
			<img src="../../uploads/projects/Bayswater/img_1920x1260_bayswater_info_01.jpg" alt="" class="js-animate" data-speed="-6">
		</div>
	</figure>
</div>
				<div class="o-section -padding-v-big" style="background-color:;">
	<div class="o-cursor_wrapper u-relative -show-native o-container js-animate" data-module="CursorZone" data-repeat data-callback="trigger.CursorZone()" data-draggable="true">
		<div class="o-cursor -alpha js-cursor -ahead -drag -points -h">
			<div class="o-cursor_background"></div>
		</div>
		<div class="c-slider" data-module="Slider">
			<div class="c-slider_container || swiper-container || js-slider || js-drag-zone">
				<div class="c-slider_wrapper || swiper-wrapper">
					<div class="c-slider_slide || swiper-slide">
						<div class="c-slider_slide-inner">
							<img src="../../uploads/projects/Bayswater/img_galerie_1920x1080_bayswater_01.jpg" alt="" />
						</div>
					</div>
					<div class="c-slider_slide || swiper-slide">
						<div class="c-slider_slide-inner">
							<img src="../../uploads/projects/Bayswater/img_galerie_1920x1080_bayswater_02.jpg" alt="" />
						</div>
					</div>
					<div class="c-slider_slide || swiper-slide">
						<div class="c-slider_slide-inner">
							<img src="../../uploads/projects/Bayswater/img_galerie_1920x1080_bayswater_03.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

			<div class="o-container">
				<div class="c-stats">
					<div class="o-layout -gutter">
						<div class="o-layout_item u-1/2@from-small || c-stats_block">
							<h3 class="o-h -normal u-anim -delay-1 js-animate">Traffic over 6 months</h3>
							<div class="o-line -text u-anim -delay-1 js-animate"></div>
							<div class="c-stats_number">300K</div>
						</div>

						<div class="o-layout_item u-1/2@from-small || c-stats_block">
							<h3 class="o-h -normal u-anim -delay-2 js-animate">Mobile traffic</h3>
							<div class="o-line -text u-anim -delay-2 js-animate"></div>
							<div class="c-stats_number">90%</div>
						</div>

						<!-- <div class="o-object3d || c-stats_object3d || js-animate" data-gui="false" data-speed="2" data-module="Object3D js-animate" data-callback="trigger.Object3D()" data-models="hand_thumb.glb" data-settings='{ "camera": { "position": [0,-1,8], "fov": 45, "translateScroll": [0,20,0] }, "ambientLight": { "intensity": 0.4 }, "object": { "position": [-0.75,0.5,-0.5], "rotation": [7,246,-83], "rotationScroll": [0,0,110] } }'></div> -->

						<div class="o-layout_item || c-stats_block -after3d">
							<div class="o-line -text"></div>
							<div class="o-layout -gutter">
								<div class="o-layout_item u-1/2@from-medium">
									<span class="c-stats_title -no-border u-anim -delay-2 js-animate">The results</span>
								</div>
								<div class="o-layout_item u-1/2@from-medium">
									<p class="u-anim -delay-2 js-animate">Design iBridge website has become tremendously popular with its audience and picked up numerous prizes, such as Site Of The Month from Awwwards, and Grand Prix awards from both Boomerang and Grafika, among others. Stats show a bounce rate under 20%, which demonstrates the relevance of the user experience offered by the platform.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="c-footer">
			<span class="o-trigger js-animate -top-screen-top" data-callback="triggerUILight.Locomotive.Scroll(way:enter|direction:down)" data-repeat></span>
				<span class="o-trigger js-animate -top-screen-top" data-callback="triggerUIDark.Locomotive.Scroll(way:leave|direction:up)" data-repeat></span>
		
			<span class="o-trigger js-animate -top-screen-top" data-callback="showQuickMenu.Locomotive.Scroll(way:enter|direction:down)" data-repeat></span>
			<span class="o-trigger js-animate -top-screen-top" data-callback="hideQuickMenu.Locomotive.Scroll(way:leave|direction:up)" data-repeat></span>
		
			<div class="c-footer_inner js-animate" data-module="CursorZone" data-repeat data-callback="trigger.CursorZone()">
		
					<div class="o-cursor -white || js-cursor">
						<div class="o-cursor_background"></div>
						<div class="o-cursor_label">
							<div class="o-cursor_label_outer">
								<div class="o-cursor_label_inner">
									<span>Click & <br> hold</span>
								</div>
							</div>
						</div>
					</div>
					<a href="home-societe.html" draggable="false" class="c-footer_lines c-heading-lines_title js-drag-zone js-hover" data-module="Footer">
						<div class="c-footer_lines_line c-heading-lines_title_line">
							<div class="o-container">
								<div class="o-line -elastic">
									<canvas class="o-line_canvas js-animate" data-callback="inview.Rope()" data-module="Rope" data-delay="0.1" data-color="white"></canvas>
								</div>
								<div class="c-heading-lines_words">
									<span class="c-heading-lines_word o-h1">Next<span class="c-footer_timeline js-timeline"></span>
									<span class="c-footer_lines_arrow js-arrow">
										<svg role="img"><use xlink:href="../../assets/images/sprite.svg#arrow"></use></svg>
									</span>
								</span>
								</div>
								<div class="o-line -elastic">
									<canvas class="o-line_canvas js-animate" data-callback="inview.Rope()" data-module="Rope" data-delay="0.1" data-color="white"></canvas>
								</div>
							</div>
						</div>
						<div class="c-footer_lines_line c-heading-lines_title_line -rail">
							<div class="c-heading-lines_words" data-module="Rail" data-rail-speed="1.5">
								<span class="c-heading-lines_word o-h1">Home Société<span class="c-footer_timeline js-timeline"></span></span>
							</div>
							<div class="o-container">
								<div class="o-line -elastic">
									<canvas class="o-line_canvas js-animate" data-callback="inview.Rope()" data-module="Rope" data-delay="0.1" data-color="white"></canvas>
								</div>
							</div>
						</div>
					</a>
		
			</div>
		
			<ul class="c-footer_socials c-social">
				<li class="c-social_item">
					<a class="o-link -circleHover" href="https://facebook.com/locoMTL" target="_blank" rel="noopener noreferrer" ga-on="click" ga-event-category="ui.social.footer" ga-event-action="click" ga-event-label="facebook">
						<span class="u-screen-reader-text">Facebook</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#facebook"></use></svg>
					</a>
				</li>
				<li class="c-social_item">
					<a class="o-link -circleHover" href="https://twitter.com/locomotivemtl" target="_blank" rel="noopener noreferrer" ga-on="click" ga-event-category="ui.social.footer" ga-event-action="click" ga-event-label="twitter">
						<span class="u-screen-reader-text">Twitter</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#twitter"></use></svg>
					</a>
				</li>
				<li class="c-social_item">
					<a class="o-link -circleHover" href="https://instagram.com/locomotivemtl" target="_blank" rel="noopener noreferrer" ga-on="click" ga-event-category="ui.social.footer" ga-event-action="click" ga-event-label="instagram">
						<span class="u-screen-reader-text">Instagram</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#instagram"></use></svg>
					</a>
				</li>
				<li class="c-social_item">
					<a class="o-link -circleHover" href="https://www.behance.net/locomotivemtl" target="_blank" rel="noopener noreferrer" ga-on="click" ga-event-category="ui.social.footer" ga-event-action="click" ga-event-label="behance">
						<span class="u-screen-reader-text">Behance</span>
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#behance"></use></svg>
					</a>
				</li>
			</ul>
		
			<div class="c-footer_footer">
				<div class="o-container">
					<div class="o-layout -middle">
						<div class="c-footer_copyright o-layout_item u-1/4@from-small">
							iBridge &copy; 2019
						</div>
						<div class="c-footer_nav o-layout_item u-3/4@from-small">
							<div class="u-text-right@from-small">
								<ul class="c-footer_nav_list">
									<li class="c-footer_nav_item">
										<a href="../careers.html" class="o-link -circleHover">
											Careers
											<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle">
												<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"/>
											</svg>
										</a>
									</li>
									<li class="c-footer_nav_item">
										<a href="../team.html" class="o-link -circleHover">
											Team
											<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle">
												<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"/>
											</svg>
										</a>
									</li>
									<li class="c-footer_nav_item">
										<a href="../contact.html" class="o-link -circleHover">
											Contact
											<svg preserveAspectRatio="none" viewBox="0 0 338 172" class="o-link_circle">
												<path vector-effect="non-scaling-stroke" d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5"/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</footer>
	</main>
</div>

		</div>

		<div class="c-lisa-button || js-lisa-toggle">
			<button class="o-circle-button" type="button">
				<span class="u-screen-reader-text">Toggle LISA</span>
				<div class="o-circle-button_bg || js-lisa-toggle-bg || c-lisa-button_bg"></div>
				<svg class="o-circle-button_icon       || c-lisa-button_icon         || js-lisa-toggle-open" role="img"><use xlink:href="../../assets/images/sprite.svg#write"></use></svg>
				<svg class="o-circle-button_icon -blue || c-lisa-button_icon -hidden || js-lisa-toggle-close" role="img"><use xlink:href="../../assets/images/sprite.svg#cross"></use></svg>
			</button>
		</div>
		
		<div class="c-lisa" data-module="Lisa" data-lang="en">
			<div class="c-lisa_ui">
				<button class="c-lisa_back -hidden || o-circle-button -small || js-back" ga-on="click" ga-event-category="contact.form" ga-event-action="back">
					<span class="u-screen-reader-text">Back</span>
					<div class="o-circle-button_bg -white"></div>
					<svg class="o-circle-button_icon -blue" role="img"><use xlink:href="../../assets/images/sprite.svg#back-arrow"></use></svg>
				</button>
		
				<!-- <button class="c-lisa_sound || js-mute" type="button">
					<span class="u-screen-reader-text">Toggle Sound</span>
					<div class="c-lisa_sound-icon -on">
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#sound-on"></use></svg>
					</div>
					<div class="c-lisa_sound-icon -off">
						<svg role="img"><use xlink:href="../../assets/images/sprite.svg#sound-off"></use></svg>
					</div>
				</button> -->
		
				<div class="c-lisa_progress-wrapper">
					<div class="c-lisa_progress" data-module="LisaProgress"></div>
				</div>
			</div>
			<div class="c-lisa_content">
				<div class="edit_projfrm">
					<img src="../../assets/images/lod.gif" class="img_lod">
					<!-- <h6>Start a project</h6>
					<h3>Sweet, now give us more details about your project?</h3> -->
					<div class="modal-wrap">
  <div class="modal-header"><span class="is-active"></span><span></span><span></span><span></span></div>
  <div class="modal-bodies">
	<div class="modal-body modal-body-step-1 is-showing">
	  <h3>Step 1</h3>
	  <h4>Find your practice</h4>
	  <form>
		<input id="autocomplete" placeholder="Type your practice name" onFocus="geolocate()" type="text" />
		<p class="err_msg">Please enter location</p>
		<div class="text-center">
		  <div class="button chksts">Start</div>
		</div>
	  </form>
	</div>
	
	<div class="modal-body modal-body-step-2">
	  <h3>Step 2</h3>
	  <!-- <h4>Would you rather</h4> -->
		<div id="address" hidden="" style="color: #fff;">
			<label style="display: flex;"><strong>Street address&nbsp;:&nbsp;</strong><p id="street_number"></p>&nbsp;<p id="route"></p></label><br>

			<label style="display: flex;"><strong>City&nbsp;:&nbsp;</strong><p id="locality"></p></label><br>

			<label style="display: flex;"><strong>State&nbsp;:&nbsp;</strong><p id="administrative_area_level_1"></p></label><br>

			<label style="display: flex;"><strong>Zip code&nbsp;:&nbsp;</strong><p id="postal_code"></p></label><br>

			<label style="display: flex;"><strong>Country&nbsp;:&nbsp;</strong><p id="country"></p></label><br>

			<label style="display: flex;"><strong>Website&nbsp;:&nbsp;</strong><p id="website"></p></label><br>

			<label style="display: flex;"><strong>Organization&nbsp;:&nbsp;</strong><p id="name"></p></label>
			<br><br>
		</div>
		<div class="text-center fade-in">
		  <div class="button">Next</div>
		</div>
	  
	</div>

	<div class="modal-body modal-body-step-3 cat_js_basic">
	  <h3>Step 3</h3>
	  <!-- <h4>Would you rather</h4> -->
		<label>
		  Select Category to know your competitors
		</label>
		  <select name="category" required onchange="get_category(this.value)" id="e1" style="color: #000;">
				<option value="">Select Category</option>
				<?php while($row = $result->fetch_assoc()) { ?>
					<option value="<?php echo $row['id'] ?>"><?php echo $row['category'] ?></option>
				<?php } ?>
			</select>
			<hr>
		<p class="err_msg">Please select category</p>
		<div class="text-center fade-in">
		  <div class="button_sel">Next</div>
		</div>
	</div>
	<div class="modal-body modal-body-step-4">
	  <h3>Step 4</h3>
	  <h4 style="text-align: center;">Check your results.</h4>
		<form method="post" action="competitors.php">
			<input type="hidden" id="frm_street_number" value="" />
			<input type="hidden" name="street_address" id="frm_route" value="" />
			<input type="hidden" id="frm_locality" name="city" value="" />
			<input type="hidden" id="frm_administrative_area_level_1" name="state" value="" />
			<input type="hidden" id="frm_postal_code" name="zip_code" value="" />
			<input type="hidden" id="frm_country" name="country" value="" />
			<input type="hidden" id="frm_website" name="website" value="" />
			<input type="hidden" id="frm_name" name="name" value="" />
			<input type="hidden" id="frm_category" name="category" value="" />
			
			<label style="display: flex;"><strong>Name&nbsp;:&nbsp;</strong></label>
			<input type="text" name="user_name" id="snme" maxlength="40">
			<br>

			<label style="display: flex;"><strong>Email&nbsp;:&nbsp;</strong></label>
			<input type="email" name="user_email" id="seml" maxlength="30">
			<br>

			<label style="display: flex;"><strong>Contact Number&nbsp;:&nbsp;</strong></label>
			<input type="text" name="user_contact" id="sno" maxlength="12">
			<br>
			<p class="err_msg">Please fill all fields</p>
			
			<div class="text-center">
				<button type="submit" class="btn_fin">Done!</button>
			</div>
		</form>		
	</div>
  </div>
</div>
<div class="text-center">
  <!--<div class="button">Loading...</div>-->
	
</div>





							
						</div>
				
				
		


		
				
			</div>
		
			
		</div>
		
		<section class="c-choo" data-module="Choochoo">
		
			<button class="o-circle-button c-choo-btn_close js-choo-close" type="button">
				<div class="o-circle-button_bg"></div>
				<svg class="o-circle-button_icon" role="img"><use xlink:href="../../assets/images/sprite.svg#cross"></use></svg>
			</button>
		
			<div class="c-choo_letter_bg js-letter-bg"></div>
		
			<div class="c-choo_letter_container">
				<span class="js-letter c-choo_letter">C</span>
				<span class="js-letter c-choo_letter">H</span>
				<span class="js-letter c-choo_letter">O</span>
				<span class="js-letter c-choo_letter">O</span>
				<span class="js-letter c-choo_letter">C</span>
				<span class="js-letter c-choo_letter">H</span>
				<span class="js-letter c-choo_letter">O</span>
				<span class="js-letter c-choo_letter">O</span>
			</div>
		
			<div class="c-choo_image_container js-images-container"></div>
		
		</section>
		<!-- <script async src="../../www.google-analytics.com/analytics.js"></script> -->
	<!-- <script src="../../assets/scripts/autotrack3e3a.js"></script> -->
	<!-- <script src="../../../www.google.com/recaptcha/apid027.js?hl=en&amp;render=explicit" async defer></script> -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.full.min.js"></script>
	<script type="text/javascript">
		$('.button_sel').click(function(){
			var e = document.getElementById("e1");
	var strUser = e.options[e.selectedIndex].text;
	if(strUser=="Select Category")
	{
		$(".err_msg").show();
		return false;
	}
	$(".err_msg").hide();
	var $btn = $(this),
	$step = $btn.parents('.modal-body'),
	stepIndex = $step.index(),
	$pag = $('.modal-header span').eq(stepIndex);
	if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2) { step1($step, $pag); }
	else { step4($step, $pag); }  
});

$('.button').click(function(){
	if($(".pac-target-input").val()=="")
	{
		$(".err_msg").show();
		return false;
	}

	$(".err_msg").hide();
	var $btn = $(this),
	$step = $btn.parents('.modal-body'),
	stepIndex = $step.index(),
	$pag = $('.modal-header span').eq(stepIndex);
	if(stepIndex === 0 || stepIndex === 1 || stepIndex === 2) { step1($step, $pag); }
	else { step4($step, $pag); }  
});



function step1($step, $pag){
	console.log('step1');
  // animate the step out
  $step.addClass('animate-out');
  
  // animate the step in
  setTimeout(function(){
	$step.removeClass('animate-out is-showing')
		 .next().addClass('animate-in');
	$pag.removeClass('is-active')
		  .next().addClass('is-active');
  }, 600);
  
  // after the animation, adjust the classes
  setTimeout(function(){
	$step.next().removeClass('animate-in')
		  .addClass('is-showing');
	
  }, 1200);
}

function step4($step, $pag){
console.log('3');

  // animate the step out
  $step.parents('.modal-wrap').addClass('animate-up');

  setTimeout(function(){
	$('.rerun-button').css('display', 'inline-block');
  }, 300);
}

$('.rerun-button').click(function(){
 $('.modal-wrap').removeClass('animate-up')
				  .find('.modal-body')
				  .first().addClass('is-showing')
				  .siblings().removeClass('is-showing');

  $('.modal-header span').first().addClass('is-active')
						  .siblings().removeClass('is-active');
 $(this).hide();
});

function get_category(id)
{
	var city = document.getElementById('locality').innerHTML;
	var state = document.getElementById('administrative_area_level_1').innerHTML;
	var country = document.getElementById('country').innerHTML;
	var organization_name = document.getElementById('name').innerHTML;
	
	console.log("Organization Name : "+organization_name);
	document.getElementById('frm_locality').value = city;
	document.getElementById('frm_administrative_area_level_1').value = state;
	document.getElementById('frm_country').value = country;
	document.getElementById('frm_name').value = organization_name;

	document.getElementById('frm_category').value = '';
	document.getElementById('frm_category').value = id;
}
</script>

<script>
	// This sample uses the Autocomplete widget to help the user select a
	// place, then it retrieves the address components associated with that
	// place, and then it populates the form fields with those details.
	// This sample requires the Places library. Include the libraries=places
	// parameter when you first load the API. For example:
	// <script
	// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

	var placeSearch, autocomplete;

	var componentForm = {
	  street_number: 'short_name',
	  route: 'long_name',
	  locality: 'long_name',
	  administrative_area_level_1: 'long_name',
	  country: 'short_name',
	  postal_code: 'short_name',
	  website: 'website',
	  name: 'name',	  
	};

	function initAutocomplete() {
	  // Create the autocomplete object, restricting the search predictions to
	  // geographical location types.
	  autocomplete = new google.maps.places.Autocomplete(
		  document.getElementById('autocomplete'), {types: ['establishment']});

	  // Avoid paying for data that you don't need by restricting the set of
	  // place fields that are returned to just the address components.
	  // autocomplete.setFields(['address_component', 'website']);

	  // When the user selects an address from the drop-down, populate the
	  // address fields in the form.
	  autocomplete.addListener('place_changed', fillInAddress);
	}

	function fillInAddress() {
	  // Get the place details from the autocomplete object.
	  document.getElementById('address').removeAttribute("hidden");
	  var place = autocomplete.getPlace();

	  for (var component in componentForm) {
		document.getElementById(component).innerHTML = '';
		// document.getElementById(component).disabled = false;
	  }
	  
	  // Get each component of the address from the place details,
	  // and then fill-in the corresponding field on the form.
	  for (var i = 0; i < place.address_components.length; i++) {
		var addressType = place.address_components[i].types[0];
		if (componentForm[addressType]) {
		  var val = place.address_components[i][componentForm[addressType]];
		  document.getElementById(addressType).innerHTML = val;		
		}
	  }

	  document.getElementById('website').innerHTML = place['website'];
	  document.getElementById('name').innerHTML = place['name'];
	  document.getElementById('frm_website').value = place['website'];
	  document.getElementById('frm_name').value = place['name'];
	}

	// Bias the autocomplete object to the user's geographical location,
	// as supplied by the browser's 'navigator.geolocation' object.
	function geolocate() {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  var geolocation = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		  };
		  var circle = new google.maps.Circle(
			  {center: geolocation, radius: position.coords.accuracy});
		  autocomplete.setBounds(circle.getBounds());
		});
	  }
		$(document).keypress(
			function(event){
			if (event.which == '13') {
				event.preventDefault();
			}
		});
	}
	

	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtHgeG6tFU_I7r3bqcLkx5OyKLcgEuMt4&libraries=places&callback=initAutocomplete"
		async defer></script>
	<script>
		$(document).ready(function() { $("#e1").select2(); });
	</script>
		<script>
			window.recaptchaKey = '6LfhbgETAAAAAEpdtdf_R6J28OgC3t00HjJTXgk6';

			var iterator = 0;
			var scripts = [
				'../../assets/scripts/vendors3e3a.js',
				'../../assets/scripts/app3e3a.js'
			];
			function dynamicallyLoadScript(url) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = url;
				document.body.appendChild(script);
				script.onload = function() {
					if (iterator < scripts.length - 1) {
						iterator++;
						dynamicallyLoadScript(scripts[iterator]);
					}
				}
			}
			window.onload = function() {
				dynamicallyLoadScript(scripts[iterator]);
			}
		</script>
		<script type="text/javascript" src="../../assets/scripts/jquery.ripples.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
		<script>
			$(document).ready(function() {
				$('.image_ripple').ripples('show');
			});

			$(".btn_fin").click(function(){
				
				var nme = $("#snme").val();
				var eml = $("#seml").val();
				var no = $("#sno").val();

				if(nme=="" && eml=="" && no=="")
				{
					$(".err_msg").show();
					return false;
				}
				else
				{
					$(".modal-wrap").fadeOut("slow");
					$(".err_msg").hide();
					$(".img_lod").fadeIn("slow");
				}
				
			});
		</script>


		<!-- <script type="text/javascript" src="../../assets/scripts/analytics.js"></script>
		<script type="text/javascript" src="../../assets/scripts/api.js"></script> -->
		
		<!-- <script type="text/javascript" src="../../assets/scripts/player.js"></script>
		<script type="text/javascript" src="../../assets/scripts/vendors.js"></script>
		<script type="text/javascript" src="../../assets/scripts/vuid.min.js"></script> -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>






<script type="text/javascript">

	// // Load the IFrame Player API code asynchronously.
	  var tag = document.createElement('script');
	  tag.src = "https://www.youtube.com/player_api";
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	  // Replace the 'ytplayer' element with an <iframe> and
	  // YouTube player after the API code downloads.
	  var player;
	  function onYouTubePlayerAPIReady() {
		player = new YT.Player('ytplayer', {
		  height: '360',
		  width: '640',
		  playerVars : {
				autoplay :0,
				controls:0,
				rel: 0
			},
		  videoId: 'N8vMn4x5jAo'
		});
	  }


$('#myid').click(function(){
	$("#myid iframe").css("display","block");
	$(".o-cursor.-white").css("display","none");
	player.playVideo();
});

$(document).mouseup(function (e)
{
	var container = new Array();
	container.push($('#myid'));
	
	$.each(container, function(key, value) {
		if (!$(value).is(e.target) // if the target of the click isn't the container...
			&& $(value).has(e.target).length === 0) // ... nor a descendant of the container
		{
			$("#myid iframe").css("display","none");
			$(".o-cursor.-white").css("display","block");
			player.stopVideo();
		}
	});
});
</script>
<script type="text/javascript">

	$("#desk_vid").click(function(){
		var vid = document.getElementById("desk_vid");
	vid.play();
	});

	document.addEventListener('scroll', function (event) {

var footer = $('footer').offset().top;

myVar = parseInt(footer, 10);
	var l = Math.pow(10, Math.floor(Math.log(myVar)/Math.log(10)));
	var b = Math.floor(myVar/l);
	var digit = b-Math.floor(b/10)*10;
	//console.log(digit);

		if (digit <= 5) {
			
		}

   if (digit <= 3){
	
   }
	}, true);

</script>

	</body>

<!-- Mirrored from locomotive.ca/en/projects/design-canada by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 26 Oct 2019 06:48:41 GMT -->
</html>