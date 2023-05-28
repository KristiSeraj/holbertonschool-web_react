import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
    const color = {
        backgroundColor: '#f5f5f5ab'
    };
    return (
        <tr>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th>{textSecondCell}</th>
                    </>
                ) : (
                    <th colSpan={2} style={{ backgroundColor: '#deb5b545' }}>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td style={color}>{textFirstCell}</td>
                    <td style={color}>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;