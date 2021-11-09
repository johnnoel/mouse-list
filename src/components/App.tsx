import DataTable from './DataTable';

const App = () => (
    <div>
        <div>
            <select>
                <option>Brand</option>
            </select>

            <select>
                <option>Handedness</option>
            </select>

            <select>
                <option>Wireless</option>
            </select>
        </div>
        <DataTable />
    </div>
);

export default App;