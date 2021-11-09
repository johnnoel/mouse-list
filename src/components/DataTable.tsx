import logitech from '../../mice/logitech.json';

const DataTable = () => (
    <table>
        <thead>
        <tr>
            <th scope="col">Brand</th>
            <th scope="col">Name(s)</th>
            <th scope="col">Handedness</th>
            <th scope="col">Wireless</th>
            <th scope="col">Battery</th>
        </tr>
        </thead>
        <tbody>
        {logitech.map(mousedeets => (
            <tr key={'logitech' + mousedeets.names.join()}>
                <td>Logitech</td>
                <td>{mousedeets.names.join(', ')}</td>
                <td>{mousedeets.handedness}</td>
                <td>{mousedeets.wireless.join(', ')}</td>
                <td>{mousedeets.battery}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default DataTable;