import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatRadioChange, MatSlideToggle, MatSlideToggleChange } from '@angular/material';
import { AppConfig, OTranslateService } from 'ontimize-web-ngx';

import { DocsSiteTheme, ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.app-settings]': 'true'
  }
})
export class SettingsComponent {

  public availableLangs: string[] = [];
  public currentLang: string;
  public availableThemes: DocsSiteTheme[];
  public currentTheme: DocsSiteTheme;
  public darkDefaultMode: boolean = false;

  @ViewChild('toggleDark')
  private toggleDark: MatSlideToggle;

  constructor(
    private _themeService: ThemeService,
  ) {
    this.availableThemes = this._themeService.availableThemes;
    this.currentTheme = this._themeService.currentTheme;
    this.darkDefaultMode = this.currentTheme.isDark;
    this._themeService.onThemeUpdate.subscribe(theme => this.currentTheme = theme);
  }

  changeDarkMode(e: MatSlideToggleChange): void {
    const currentTheme = this._themeService.getStoredTheme();
    currentTheme.isDark = e.checked;
    this._themeService.installTheme(currentTheme);
  }

}