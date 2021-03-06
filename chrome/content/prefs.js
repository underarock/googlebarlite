Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import('resource://googlebarlite/gbl-common.js');

var objGooglebarLitePrefs = {
	DoValidate: function(event) {
		if(!this.ShortcutIsValid())
		{
			var pw = document.getElementById("GBL-PrefWindow");
			pw.showPane(document.getElementById("GBL-PrefPane-Keyboard"));
			event.stopPropagation();
			return false;
		}
	},
	
	InitUI: function() {
		this.UpdateAutoCompleteSubOptions();
		this.UpdateSearchHistoryStatus();
		this.UpdateShowContextMenuStatus();
		
		this.UpdateCtrlSearch();
		this.UpdateShiftSearch();
		this.UpdateShiftCtrlSearch();
	},
	
	ShortcutIsValid: function() {
		var ctrl = document.getElementById("GBL-Opt-Shortcut-Ctrl").checked;
		var alt = document.getElementById("GBL-Opt-Shortcut-Alt").checked;
		var shift = document.getElementById("GBL-Opt-Shortcut-Shift").checked;

		var key = document.getElementById("GBL-Opt-SearchBoxFocusKey").value;
		var keyValid = /[a-zA-Z]/.test(key);
		
		var isValid = (ctrl || alt || shift) && keyValid;
		return isValid;
	},
	
	UpdateAutoCompleteSubOptions: function() {
		var disabled = ! document.getElementById("GBL-Opt-EnableAutoComplete").checked;
		document.getElementById("GBL-Opt-UseInlineComplete").disabled = disabled;
		document.getElementById("GBL-Opt-EnableSearchSuggest").disabled = disabled;
	},
	
	UpdateCtrlSearch: function() {
		var disabled = ! document.getElementById("GBL-Opt-CtrlSearchEnabled").checked;

		document.getElementById("GBL-Opt-CtrlSearch").disabled = disabled;
		document.getElementById("GBL-Opt-CtrlSearchNewTab").disabled = disabled;
	},

	UpdateSearchHistoryStatus: function() {
		var disabled = ! document.getElementById("GBL-Opt-MaintainHistory").checked;

		document.getElementById("GBL-Opt-EnableSearchSuggest").disabled = disabled;
		document.getElementById("GBL-Opt-EnableAutoComplete").disabled = disabled;
		if(document.getElementById("GBL-Opt-EnableAutoComplete").checked)
			document.getElementById("GBL-Opt-UseInlineComplete").disabled = disabled;
		document.getElementById("GBL-Opt-AutoSearch").disabled = disabled;
		document.getElementById("GBL-Opt-PromptToClearHistory").disabled = disabled;
		document.getElementById("GBL-Opt-IgnoreDictionary").disabled = disabled;
	},

	UpdateShiftSearch: function() {
		var disabled = ! document.getElementById("GBL-Opt-ShiftSearchEnabled").checked;

		document.getElementById("GBL-Opt-ShiftSearch").disabled = disabled;
		document.getElementById("GBL-Opt-ShiftSearchNewTab").disabled = disabled;
	},

	UpdateShiftCtrlSearch: function() {
		var disabled = ! document.getElementById("GBL-Opt-ShiftCtrlSearchEnabled").checked;

		document.getElementById("GBL-Opt-ShiftCtrlSearch").disabled = disabled;
		document.getElementById("GBL-Opt-ShiftCtrlSearchNewTab").disabled = disabled;
	},
	
	UpdateShowContextMenuStatus: function() {
		var disabled = ! document.getElementById("GBL-Opt-CM-ShowContext").checked;
		
		document.getElementById("GBL-Opt-CM-Web").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Site").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Images").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Video").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Maps").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Groups").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Dictionary").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Backward").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Cached").disabled = disabled;
		document.getElementById("GBL-Opt-CM-CachedLink").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Similar").disabled = disabled;
		document.getElementById("GBL-Opt-CM-Translate").disabled = disabled;
	},
	
	ValidateKeyboardShortcut: function(event) {
		var isValid = this.ShortcutIsValid();
		
		if(!isValid)
			event.stopPropagation();
		
		document.getElementById("GBL-Opt-Shortcut-Error").hidden = isValid;
	}
};
