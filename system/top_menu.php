<div  style="line-height:70px;">
<img src="img/logo.png" id="logo" width="220" style="margin-top:10px;" />
</div>
<style>
@media (max-width: 600px) {
    .navbar {
        display: none;
    }
	#logo {
		width:100%;
	}
	
}
</style>
<div id="user-nav" class="navbar navbar-inverse hidden-xs" style="margin-top:0px;" >
  <ul class="nav">
    <li class="dropdown" onClick="ReadNotification();" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle">
	<span class="text">Bildirimlerim</span> <span id="notification_count" class="label label-important">0</span> <b class="caret"></b></a>
	 <ul class="dropdown-menu"  style="width:500px !important;">
	<div id="notification_area">

	</div>
					<li style="margin-left:20px; margin-top:10px; margin-bottom:10px;"><a href="index.php?module=main/notifications">Tüm Bildirimler</a></li>

      </ul>

    </li>
  </ul>
</div>