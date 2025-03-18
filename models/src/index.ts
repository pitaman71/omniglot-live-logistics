// models/src/index.ts
import { Definitions, Values } from '@pitaman71/omniglot-live-data';

import * as Address from './Address';
import * as Date from './Date';
import * as DateRange from './DateRange';
import * as DateTime from './DateTime';
import * as Duration from './Duration';
import * as Event from './Event';
import * as GeoPoint from './GeoPoint';
import * as GeoShape from './GeoShape';
import * as Interval from './Interval';
import * as Meridian from './Meridian';
import * as Municipality from './Municipality';
import * as Place from './Place';
import * as Time from './Time';
import * as TimeRange from './TimeRange';
import * as Vicinity from './Vicinity';
import * as When from './When';
import * as Where from './Where';
import * as Zone from './Zone';

export const directory = Definitions.Directory.from(
    Address.directory, Date.directory, DateRange.directory, DateTime.directory, 
    Duration.directory, Event.directory, Interval.directory, GeoPoint.directory, GeoShape.directory,
    Meridian.directory, Municipality.directory, Place.directory,
    Time.directory, TimeRange.directory, Vicinity.directory,
    When.directory, Where.directory, Zone.directory);

export { Address, Date, DateRange, DateTime, 
    Duration, Event, Interval, GeoPoint, GeoShape,
    Meridian, Municipality, Place,
    Time, TimeRange, Vicinity,
    When, Where, Zone
};
