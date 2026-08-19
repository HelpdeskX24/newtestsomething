<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; color: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; color: #000000; min-height: 15.0px}
  </style>
</head>
<body>
<p class="p1">&lt;?php</p>
<p class="p1">header('Access-Control-Allow-Origin: *');</p>
<p class="p1">header('Content-Type: application/json');</p>
<p class="p2"><br></p>
<p class="p1">$passphrase = "U26HSHGVBK6H2q"; <span class="Apple-converted-space">  </span>// 🔥 इसे index.html वाले PASSPHRASE से मैच करें</p>
<p class="p1">$htmlPath = '/var/www/kleocosbar.com/shop-content.html';</p>
<p class="p2"><br></p>
<p class="p1">if (!file_exists($htmlPath)) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>http_response_code(404);</p>
<p class="p1"><span class="Apple-converted-space">    </span>echo json_encode(['error' =&gt; 'Content not found']);</p>
<p class="p1"><span class="Apple-converted-space">    </span>exit;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function simple_encrypt($data, $key) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>$key = hash('sha256', $key, true);</p>
<p class="p1"><span class="Apple-converted-space">    </span>$iv = str_repeat("\0", 16);</p>
<p class="p1"><span class="Apple-converted-space">    </span>return base64_encode(openssl_encrypt($data, 'aes-256-cbc', $key, OPENSSL_RAW_DATA, $iv));</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">$htmlContent = file_get_contents($htmlPath);</p>
<p class="p1">$cipher = simple_encrypt($htmlContent, $passphrase);</p>
<p class="p2"><br></p>
<p class="p1">echo json_encode(['cipher' =&gt; $cipher]);</p>
<p class="p1">?&gt;</p>
</body>
</html>
