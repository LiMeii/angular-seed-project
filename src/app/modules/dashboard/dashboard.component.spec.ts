import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('dashboard component', () => {

    let fixture, dashbaord, element, de;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent]
        });
        fixture = TestBed.createComponent(DashboardComponent);
        dashbaord = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
    });
    it('shuld render `dashbaord page`', async(() => {
        dashbaord.title = "Dashboard page";
        fixture.detectChanges();
        fixture.WhenStable().then(() => {
            expect(de.query(By.css('content')).nativeElement.innerText).toBe('Dashboard page');
        });
    }));

})